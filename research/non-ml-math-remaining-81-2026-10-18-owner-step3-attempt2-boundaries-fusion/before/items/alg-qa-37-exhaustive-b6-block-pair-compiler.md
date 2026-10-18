---
id: alg-qa-37-exhaustive-b6-block-pair-compiler
kind: algorithm
title: "Exhaustive certified Fibonacci B6 block-pair search"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - def-qa-37-certified-matrix-input
  - def-qa-37-resource-cost-model
  - def-qa-37-anyon-task-and-promise
  - lem-qc-tqc-fibonacci-b6-path-projectors-and-artin
  - def-qa-37-phase-reference-cost
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - ex-qc-tqc-fibonacci-data
justified_by: []
axiom_use: "None for the search instructions; termination depends separately on the ACω density theorem."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci braid blocks, PDF pp. 53–57."
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: "§4, Theorem 4.1 and proof, printed pp. 17–21; this source is a cross-check, not the local certificate."
proof_strategy: direct
---

## Definition

**Inputs:** certified Cauchy names for targets $T_5\in SU(5)$ and
$T_8\in SU(8)$; a positive binary-rational tolerance $\varepsilon$; and the
fixed normalized six-strand Fibonacci B6 generators in both total-charge
blocks. Use the ordered alphabet
$(\sigma_1,\ldots,\sigma_5,\sigma_1^{-1},\ldots,\sigma_5^{-1})$ for $B_6$.
For $d\in\{5,8\}$, form the exact generators
$B_i^{(d)}=rI+(1-r)P_i^{(d)}$ from the Fibonacci path-projector formula
[[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]], and use
$(B_i^{(d)})^*$ for inverse letters. To produce a rational approximant to a
word block at precision $p$, write $b=a_1\cdots a_\ell$ in Artin product
order and multiply its exact letter matrices as
$B_{a_1}^{(d)}\cdots B_{a_\ell}^{(d)}$ (the rightmost factor acts first).
Write $q=\sqrt5>0$, $\phi=(1+q)/2$,
$s=\sqrt\phi>0$, $h=\sqrt{10+2q}>0$, and
$r=-(2\phi)^{-1}-ih/4$, the fixed Fibonacci data of
[[ex-qc-tqc-fibonacci-data]]. Start with dyadic root intervals $[2,3]$ for
$q$, $[1,2]$ for $s$, and $[3,4]$ for $h$. At each pass $t=1,2,\ldots$,
bisect each interval once, keeping the half certified by its defining square
equation and exact rational comparisons. To compare a rational midpoint square
for $s$ or $h$, refine the $q$ interval until the resulting rational enclosure
of its radicand lies strictly on one side; these radicands are irrational, so
each comparison terminates. For real intervals $I=[a,b]$ and
$J=[c,d]$, use $I+J=[a+c,b+d]$, $-I=[-b,-a]$,
$IJ=[\min(ac,ad,bc,bd),\max(ac,ad,bc,bd)]$, and
$I/J=I[1/d,1/c]$ when $0<c\le d$. Represent a complex enclosure by a pair
of real intervals and multiply $(I_1,I_2)(J_1,J_2)$ as
$(I_1J_1-I_2J_2,I_1J_2+I_2J_1)$; conjugation sends $(I_1,I_2)$ to
$(I_1,-I_2)$. Use these rational endpoint operations to evaluate each exact
matrix-entry expression. Stop when every real and imaginary coordinate
interval has width at most $2^{1-p}$, and return its midpoint;
the coordinate error is then at most $2^{-p}$. These intervals converge to
the exact entries, and all divisions are by positive powers of $\phi>1$, so
this loop terminates. At stage $s_0=1,2,\ldots$, inspect word lengths
$\ell=0,\ldots,s_0$ in lexicographic order and precisions $1\le p\le s_0$
in increasing order, skipping pairs already inspected. For each new pair
$(b,p)$, produce rational complex matrix approximants
$P_{5,b,p},P_{8,b,p}$ by the interval procedure and request rational target
approximants $Q_{5,p},Q_{8,p}$. For $d\in\{5,8\}$ compute the rational number
$$s_{d,b,p}=\sum_{i,j}\Bigl(|\Re(P_{d,b,p}-Q_{d,p})_{ij}| +|\Im(P_{d,b,p}-Q_{d,p})_{ij}|\Bigr).$$
Return the first word for which both rational tests
$$s_{d,b,p}+4d\,2^{-p}<\varepsilon\qquad(d=5,8)$$
hold. Output the word, its exponent sum, $p$, and for each block the rational
value $s_{d,b,p}$ and the verified strict test, together with measured search
and precision costs in the ledger of [[def-qa-37-resource-cost-model]]. The
returned matrices are normalized by the common $R_1$ scalar; their physical
phase is recorded by [[def-qa-37-phase-reference-cost]]. This is a dovetailed
partial search definition: no cutoff or useful word-length/time bound is
asserted here. A separate theorem in this pair proves termination under
certified target access.

For this compiler subroutine's ledger record, $N_{\rm any}=6$,
$\epsilon_{\rm op}=\varepsilon$, $N_{\rm meas}=B_{\rm out}=0$, and
$N_{\rm phase}=t_{\rm phase}=0$ because it performs no measurement or phase
correction. Preparation, ancilla, Hamiltonian-time, transport, measurement-
implementation and physical-leakage coordinates are “not applicable” because
this mathematical search supplies no physical realization. $L_{\rm in}$,
$|b|$, $b_{\max}$, and $t_{\rm cl}$ record the encoded target/compiler inputs,
returned word, greatest precision request, and measured search/postprocessing
bit time.

## Facts & Assumptions

**Given:** The exact normalized braid matrices, rational approximants with entrywise coordinate error at most $2^{-p}$, and the two accepted rational tests.

[F1] The certified fixed-dimensional input supplies rational complex matrix approximants whose real and imaginary coordinates each have error at most $2^{-p}$. [[def-qa-37-certified-matrix-input]]

[F2] For a finite matrix, the operator norm is at most the Frobenius norm. [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]

[F3] The normalized B6 matrices are fixed finite-dimensional algebraic matrices in the declared total-charge blocks. [[lem-qc-tqc-fibonacci-b6-path-projectors-and-artin]]

## Proof

1.1 For any $d\times d$ complex matrix whose real and imaginary entry coordinates have errors at most $2^{-p}$, the Frobenius norm of the error is at most $d\sqrt2\,2^{-p}$. Apply this to the word approximant and target approximant using [F1]; their two errors total at most $2d\sqrt2\,2^{-p}<3d\,2^{-p}$. The triangle inequality for the Euclidean entry norm therefore gives $\|B_d(b)-T_d\|_F\le\|P_{d,b,p}-Q_{d,p}\|_F+3d2^{-p}$. [F1, F3, given, algebra]

2.1 The sum of the absolute real and imaginary coordinates in $s_{d,b,p}$ dominates the Frobenius norm of $P_{d,b,p}-Q_{d,p}$. By [F2], $\|B_d(b)-T_d\|_{\rm op}\le\|B_d(b)-T_d\|_F\le s_{d,b,p}+3d2^{-p}<s_{d,b,p}+4d2^{-p}<\varepsilon$. Thus each accepted rational test certifies the strict operator-norm bound in its block. [F2, step 1.1, given, algebra] ∎
