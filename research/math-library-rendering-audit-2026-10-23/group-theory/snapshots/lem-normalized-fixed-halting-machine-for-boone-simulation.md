---
id: lem-normalized-fixed-halting-machine-for-boone-simulation
kind: lemma
title: "Normalized fixed halting machine for boone simulation"
status: published
origin: pipeline
deps: ["thm-halting-is-recognizable-and-undecidable", "def-deterministic-one-tape-turing-machine", "def-turing-machine-initial-and-halting-configuration-interface"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.420\u2013425, definitions of quadruple/basic move, Exercise 12.11"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Statement

Fix the deterministic one-tape recognizer $R$ of $HALT_{TM}$. There is a fixed finite deterministic machine $T$ on a two-sided blank tape whose instructions each either write without moving, move left without writing, or move right without writing. It has exactly one stopping state $q_0$, and exactly one instruction for every other state and tape symbol. With $v(\varepsilon)=s_0$ (blank) and $v(w)=w$ for nonempty binary $w$, it stops on $v(w)$ exactly when $R$ accepts $w$. Consequently its stopping language is undecidable.

## Facts & Assumptions

**Given:** The fixed recognizer $R$; its input alphabet excludes blank. No choice axiom is needed.

[F1] $HALT_{TM}$ is recognizable and undecidable; the proof constructs the fixed recognizer $R$. ([[thm-halting-is-recognizable-and-undecidable]])

[F2] The finite table has entries $\delta(p,a)=(p',b,D)$ for every nonhalting state and symbol, with two designated halting states and $D\in\{L,R\}$. ([[def-deterministic-one-tape-turing-machine]])

[F3] Initial input starts at cell zero; an empty input scans blank. A left move at zero stays at zero. ([[def-turing-machine-initial-and-halting-configuration-interface]])

## Proof

1.1 Give each symbol $a$ an undotted copy $a$ and a dotted copy $\dot a$. Let $f$ send accepting state to $q_0$, rejecting state to a new state $\ell$, and each other state to its tagged simulator copy. Add a new start state $z$. On any undotted $a$, its instruction writes $\dot a$ and enters $f(p_{\rm start})$. This also defines initialization for empty input, by writing $\dot s_0$. [F2, F3, construct]

2.1 For each table entry $(p,a)\mapsto(p',b,D)$ and bit $d\in\{0,1\}$, add a fresh intermediate state $j_{p,a,d}$. In state $f(p)$ scanning $a^{(d)}$, write $b^{(d)}$ and enter $j_{p,a,d}$. On $b^{(d)}$, this intermediate state moves in direction $D$ and enters $f(p')$, except that for $d=1,D=L$ it writes the same $b^{(1)}$ without moving and enters $f(p')$. Every other symbol in that intermediate state goes by a no-op write to $\ell$. State $\ell$ no-op writes every symbol and stays in $\ell$. The unused dotted inputs at $z$ also go to $\ell$. There are no entries at $q_0$. The cases are disjoint and exhaust every nonstopping state/symbol pair. Their indexing sets are finite, so this is a literal finite deterministic table. [F2, F3, step 1.1, construct]

3.1 After initialization, the unique dot is at cell zero; undotting the nonnegative tape gives precisely $R$'s initial tape, and all negative cells are blank. Suppose this invariant holds at a simulated nonhalting state. The first instruction writes precisely $R$'s new symbol, retaining the dot bit. The second instruction scans that very symbol, so it follows the designated intermediate branch. Away from zero it makes $R$'s move. At zero a left move is the no-op specified in step 2.1, while a right move reaches cell one. Thus no negative cell is visited and the unique dot is neither lost nor copied. The next macro boundary has exactly $R$'s new head, tape and mapped state. Repeating this calculation proves the invariant after every simulated step. [F2, F3, step 1.1, step 2.1]

4.1 The macro boundaries occur at times $1+2n$ until a halting outcome. Every intervening time is the intermediate state for the preceding table entry, so a run cannot reach $q_0$ in an unaccounted intermediate step. If $R$ accepts at step $n$, $T$ reaches $q_0$ at time $1+2n$. Conversely the only reached entry into $q_0$ finishes a macro whose target is acceptance. Rejection reaches $\ell$ and loops forever; an infinite nonhalting run gives infinitely many two-instruction macros. This proves both stopping directions and divergence. [step 2.1, step 3.1]

4.2 Represent the two-sided tape after any finite time by the finite interval containing the input and all visited cells, including the scanned cell. A move out of that interval adjoins one blank at the appropriate end; a write changes only its scanned cell. These are exactly the five finite-description cases (write, internal/end right, internal/end left), with nonempty scanned right segment. Extra unvisited blanks do not change the infinite-tape run. Thus the constructed machine has the finite-description interface used by the semigroup construction. [step 2.1, step 3.1, construct]

5.1 Computing $v$ merely tests whether the input is empty and, in that case, writes one blank symbol in its finite-word encoding. A decider for $T$'s stopping language composed with this procedure would decide membership of every binary $w$ in $HALT_{TM}$ by step 4.1, contradicting [F1]. The same fixed table works for all $w$, including words of lengths zero and one. [F1, step 4.1, step 4.2] ∎

## Source conventions

Rotman, Chapter 12, printed pp.420–423 (quadruples and five basic moves), and Exercise 12.11 on p.425 provide the target interface. The dotted-boundary compiler above supplies the conversion from the local right-infinite, two-outcome model explicitly.
