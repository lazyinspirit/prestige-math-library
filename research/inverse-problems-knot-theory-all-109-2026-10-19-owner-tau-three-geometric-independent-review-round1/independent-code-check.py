"""Independent port walking, without importing or running the author's generator."""
import json
from pathlib import Path

adj = {}
letters = [-1, -1] + [2, 1, 3, 2] * 3
geometric = {}

def join(a, b):
    adj.setdefault(a, []).append(b)
    adj.setdefault(b, []).append(a)

def stack(word, tag, n, offset):
    strands = [(tag, 'top', i) for i in range(n)]
    for number, letter in enumerate(word, offset):
        j = abs(letter) - 1
        geometric[number] = 1 if letter > 0 else -1
        join(strands[j], (number, 0))
        join(strands[j+1], (number, 1))
        strands[j], strands[j+1] = (number, 3), (number, 2)
    for i, end in enumerate(strands):
        join(end, (tag, 'bottom', i))

stack(letters, 'main', 4, 1)
stack([-1, -1], 'clasp', 2, 15)
for i in (2, 3):
    join(('main', 'bottom', i), ('main', 'top', i))
for a, b in [
    (('clasp', 'top', 0), ('main', 'top', 0)),
    (('clasp', 'top', 1), ('main', 'bottom', 0)),
    (('clasp', 'bottom', 0), ('main', 'top', 1)),
    (('clasp', 'bottom', 1), ('main', 'bottom', 1)),
]:
    join(a, b)

def is_port(x):
    return len(x) == 2 and isinstance(x[0], int)

def other_port(start):
    last, x = start, adj[start][0]
    while not is_port(x):
        assert len(adj[x]) == 2
        last, x = x, next(y for y in adj[x] if y != last)
    return x

alpha = {p: other_port(p) for p in adj if is_port(p)}
assert len(alpha) == 64
assert all(alpha[alpha[p]] == p and alpha[p] != p for p in alpha)

state = (1, 0)
entered = set()
visits = []
while state not in entered:
    entered.add(state)
    crossing, port = state
    over = port in ((1, 3) if geometric[crossing] > 0 else (0, 2))
    visits.append(crossing if over else -crossing)
    state = alpha[(crossing, (port+2) % 4)]
assert state == (1, 0) and len(visits) == 32
expected_word = [1,-2,-4,-6,7,8,-12,-14,3,4,-8,-10,11,12,-15,16,
                 14,13,-9,-7,6,5,-13,-11,10,9,-5,-3,2,-1,-16,15]
assert visits == expected_word

signs, rows, arrows = [], [], []
edge_names = {}
for j in range(1, 17):
    in_ports = [p for p in range(4) if (j, p) in entered]
    assert len(in_ports) == 2
    over_ports = (1, 3) if geometric[j] > 0 else (0, 2)
    over_in = next(p for p in in_ports if p in over_ports)
    under_in = next(p for p in in_ports if p not in over_ports)
    signs.append(geometric[j] * (1 if over_in < 2 else -1)
                 * (1 if under_in < 2 else -1))
    over_out = (over_in+2) % 4
    row, arrow_row = [], []
    for k in range(4):
        p = (j, (over_out+k) % 4)
        edge = frozenset((p, alpha[p]))
        if edge not in edge_names:
            edge_names[edge] = len(edge_names)+1
        row.append(edge_names[edge])
        arrow_row.append('in' if p in entered else 'out')
    rows.append(row)
    arrows.append(arrow_row)

expected_rows = [[1,2,3,4],[2,1,5,6],[7,5,8,9],[10,6,7,11],
 [12,13,14,9],[14,15,16,11],[17,16,15,18],[19,10,17,20],
 [13,21,22,18],[22,23,24,20],[25,24,23,26],[27,19,25,28],
 [21,12,29,26],[29,8,30,28],[3,27,31,32],[30,4,32,31]]
expected_signs = [1,1,-1,1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1]
assert rows == expected_rows and signs == expected_signs
assert len(edge_names) == 32
for s, arr in zip(signs, arrows):
    assert arr == (['out','in','in','out'] if s > 0
                   else ['out','out','in','in'])

unseen, face_lengths = set(alpha), []
while unseen:
    start = min(unseen)
    cycle, x = [], start
    while x not in cycle:
        assert x in unseen
        unseen.remove(x)
        cycle.append(x)
        x = alpha[(x[0], (x[1]+1) % 4)]
    assert x == start
    face_lengths.append(len(cycle))
assert sorted(face_lengths) == sorted([3,5,2,6,3,4,4,4,3,4,2,4,4,4,2,4,4,2])
assert 16-32+len(face_lengths) == 2

# Coherently orient the two annulus parallels before clasp insertion.
labels = [0, 1, 0, 1]
mixed_sum = 0
for letter in letters:
    i = abs(letter)-1
    if labels[i] != labels[i+1]:
        mixed_sum += 1 if letter > 0 else -1
    labels[i], labels[i+1] = labels[i+1], labels[i]
assert mixed_sum == 4

result = {'method':'Independent adjacency-path port walk; author generator not imported',
 'crossings':16, 'edges':32, 'faces':len(face_lengths), 'Euler':2,
 'oriented_components':1, 'signed_visit_word':visits,
 'crossing_signs':signs, 'PD_rows':rows, 'PD_arrows':arrows,
 'sorted_face_lengths':sorted(face_lengths),
 'coherent_parallel_mixed_sum':mixed_sum, 'annulus_framing_half_sum':2,
 'scope':'Finite diagram/cable/clasp validation only; no D6 or numerical invariant admission'}
print(json.dumps(result, indent=2))
