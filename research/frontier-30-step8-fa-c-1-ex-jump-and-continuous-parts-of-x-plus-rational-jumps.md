# Final-adjudicator evidence: `ex-jump-and-continuous-parts-of-x-plus-rational-jumps`

Disposition: `repaired`.

## Material independently reviewed

I read the current item; its three declared dependencies; the A page and B
page; the batch-3 page manifest, coverage record, notes, batch and merged proof
contracts; the group-c convention and load-bearing records; the moderate-risk
classification (boundary-sensitive and analytic-limit language); both frozen
judge rejections; both confirmed-fatal adjudications; and both Alpha repairs.

The first judge correctly observed that an enumeration with repetitions would
make a jump equal to the sum of all repeated weights, not necessarily
$2^{-n}$. Alpha correctly required no repetitions. The second judge correctly
observed that the construction lacked a domain, so its endpoint convention was
ill typed. Alpha correctly specified $F:[0,1]\to\mathbb R$ and included the
left jump at $1$.

## Mathematical check and independent repair

For every $N$, the first $N$ indicator summands are locally constant away from
$q_1,\ldots,q_N$, and the remaining summands have total size
$\sum_{n>N}2^{-n}\to0$. Hence the series defines a nondecreasing function. At
$q_m$, taking $N\ge m$ and then sending $N$ to infinity proves that its left
jump is exactly $2^{-m}$ and its right limit is its value. The same estimate
gives continuity away from the enumerated points and right-continuity with
zero defect at $0$. It also covers the one-sided left jump at the unique
enumerated point $1$. Adding the continuous function $x\mapsto x$ changes none
of these jump data, so claim 2 of the cited splitting theorem identifies the
jump part with the displayed series and the continuous remainder with $x$.

Alpha's repaired item had the correct conclusion, but its proof still asserted
the infinite-series limit facts without the tail argument, while both current
proof-contract copies still omitted the endpoint-$1$ contribution, marked the
endpoint case not applicable, and used the stale set $\mathbb Q\cap[0,1]$.
I made the tail argument explicit, regenerated the batch derivations, corrected
the boundary rows to cover both endpoints and $\mathbb Q\cap(0,1]$, and merged
the corrected entry into the run-level contract. No dependency was changed, so
no owner-prerequisite-repair licence is required.

## Source status

`familiar`. The only independently supplied mathematics is the elementary
geometric-tail estimate and its standard epsilon application to a uniformly
summable series of step functions. The nontrivial decomposition is not supplied
from recollection: it is invoked exactly from the reviewed local dependency.
External verification was therefore unnecessary.

## Focused checks on final bytes

- Focused item precheck: pass (`1 checked, 0 failing`).
- Batch-3 strict proof contract for this id: pass (`0 error(s), 0 warning(s)`).
- Merged strict proof contract for this id: pass (`0 error(s), 0 warning(s)`).
- Batch-3 content policy: pass (`33 scoped item(s), 0 error(s), 0 warning(s)`).
- Batch-3 boundary audit with contradicted dispositions fatal: pass; no
  contradicted disposition was found.

## Queue-current reseal

During the later independent review of queue item 4, I repaired a proof gap in
this example's direct dependency: the jump-increment comparison must include a
possible right jump at the comparison point. The dependency's statement and the
claim used by this example did not change. I reran this item's focused precheck
and both strict contract checks after that repair and resealed its terminal
context before recording item 4, so queue position 1 remains current.
