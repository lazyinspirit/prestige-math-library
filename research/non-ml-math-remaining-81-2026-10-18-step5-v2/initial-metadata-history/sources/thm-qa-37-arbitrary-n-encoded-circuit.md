---
id: thm-qa-37-arbitrary-n-encoded-circuit
kind: theorem
title: "Arbitrary-size triple-encoded projective braid approximation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 14
deps:
  - thm-qa-37-su2-compiler-error-length
  - thm-qc-tqc-spectator-extension
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
  - lem-qa-37-product-error
  - lem-qc-tqc-leakage-logical-error-accumulation
  - lem-qa-37-fixed-sector-global-phase
  - def-countable-choice
  - def-real-numbers
  - cor-cauchy-reals-lub-complete
  - thm-of-square-roots
  - lem-cauchy-reals-archimedean
  - ex-qc-tqc-fibonacci-data
  - lem-qc-tqc-fusion-tree-dimension
  - def-qa-37-n-triple-fusion-code
  - thm-qa-37-exhaustive-b6-compiler-terminates
  - thm-qc-tqc-braid-action-unitary-and-artin
  - lem-qa-37-local-braid-acts-trivially-on-spectators
  - def-qa-37-fibonacci-braid-gate-set
justified_by: []
axiom_use: "Assumes exactly ACω through single-qubit projective density and joint B6 density; no full Axiom of Choice is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c and §IV.C, encoding and physical caveats, PDF pp. 53–63."
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: "§§2–4, SU(2) compiler hypotheses and resource bounds, PDF pp. 2–10."
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406176
      locator: "Theorem 13, exact QSD gate decomposition, PDF pp. 9–13."
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: "§4, Theorem 4.1 and proof, printed pp. 17–21; cross-check only."
---

## Statement

Assume $\mathrm{AC}_\omega$. Fix the inverse-closed Fibonacci SU(2) gate
package and its supplied finite base-net certificate
$(\mathcal N_0,\eta_0,L_0)$ from
[[def-qa-37-fibonacci-braid-gate-set]]. Let $n\ge1$, let
$c\in\{1,\tau\}$ satisfy $V(\tau^n\to c)\ne0$, and let
$U\in U(2^n)$ and $\epsilon>0$. Use the arbitrary-$n$ triple code
$\mathcal C_{n,c}$, isometry $J_{n,c}$, and projector $P_{n,c}$ of
[[def-qa-37-n-triple-fusion-code]]. There exists a finite physical
Fibonacci braid word $b$ and a unit scalar $\omega$ such that
$$\|J_{n,c}^*\rho(b)J_{n,c} -\omega(U\otimes I_{V(\tau^n\to c)})\|_{\rm op}\le\epsilon, \qquad \|(I-P_{n,c})\rho(b)J_{n,c}\|_{\rm op}\le\epsilon.$$
The bounds are uniform over spectator fusion states. The proof composes exact
QSD, SK approximation of one-qubit SU(2) representatives, and joint B6
targets extended safely over spectators. The scalar $\omega$ is the product
of braid exponent-sum and one-qubit lift phases; under coherent control it
must be retained or corrected. For certified Cauchy target names the B6
dovetail terminates, but no useful joint-block word-length or search-time
bound follows. This is a mathematical existence result and does not imply a
physical realization.

## Facts & Assumptions

**Given:** The finite-dimensional logical unitary $U$, the fixed Fibonacci SU(2) base-net package, the arbitrary-$n$ fixed-charge triple code, a total charge $c$ with nonzero spectator space, and $\epsilon>0$.

[F1] For $n\ge2$ every $n$-qubit unitary has a finite exact no-ancilla factorization into one-qubit gates and CNOTs; for $n=1$ it is a one-qubit gate. The theorem asserts no synthesis-time or precision bound. [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]]

[F2] The Fibonacci SK compiler approximates any exact $S\in SU(2)$ within rational tolerance $\delta\le\eta_0$ using a finite word, under the supplied base-net hypotheses. [[thm-qa-37-su2-compiler-error-length]]

[F3] For certified Cauchy inputs in $SU(5)\times SU(8)$, the exhaustive B6 compiler terminates, but has no useful joint-block length or search-time bound. [[thm-qa-37-exhaustive-b6-compiler-terminates]]

[F4] A two-qubit target has a code-preserving six-strand ideal extension whose normalized braid error is bounded on the full ambient fusion space, uniformly over all spectator paths. [[thm-qc-tqc-spectator-extension]]

[F5] For a finite product of unitary factors, operator errors are at most the sum of factor errors. [[lem-qa-37-product-error]]

[F6] $\mathcal C_{n,c}$ is the image of the isometry $J_{n,c}$ defined by grouped triple fusion paths and all spectator fusion paths. [[def-qa-37-n-triple-fusion-code]]

[F7] If ideal unitaries preserve the code, a full-space product error bound also bounds logical block error and leakage amplitude by the same amount. [[lem-qc-tqc-leakage-logical-error-accumulation]]

[F8] Physical Fibonacci braid words carry a common exponent-sum phase; standalone projective phases become relative under coherent control. [[lem-qa-37-fixed-sector-global-phase]]

[F9] The Fibonacci fusion rule is $\tau\otimes\tau=1\oplus\tau$, with both channels of multiplicity one. [[ex-qc-tqc-fibonacci-data]]

[F10] The fusion-tree dimension recurrence computes multiplicities by summing products of local vertex multiplicities. [[lem-qc-tqc-fusion-tree-dimension]]

[F11] The fixed-charge braid action is unitary and preserves total charge. [[thm-qc-tqc-braid-action-unitary-and-artin]]

[F12] On the grouped triple fusion tree, a braid supported inside one triple acts on that triple's multiplicity factor and as identity on every other triple and spectator factor. [[lem-qa-37-local-braid-acts-trivially-on-spectators]]

[F13] The library real field is the Cauchy-sequence real field, which is complete; every nonnegative real therefore has a unique nonnegative square root. [[def-real-numbers]] [[cor-cauchy-reals-lub-complete]] [[thm-of-square-roots]]

[F14] The canonical naturals are cofinal in the real field: for every real $x$ there is a natural, hence integer, $N>x$. [[def-real-numbers]] [[lem-cauchy-reals-archimedean]]

[A1] Assume exactly $\mathrm{AC}_\omega$ through the single-qubit and joint B6 density suppliers. [[def-countable-choice]]

## Proof

1.1 By [F6], the code consists of $n$ local two-path triple factors and the full spectator space. The fusion recurrence from [F9]–[F10] gives $m_2(1)=m_2(\tau)=1$, then $m_3(1)=m_2(\tau)=1$ and $m_3(\tau)=m_2(1)+m_2(\tau)=2$. Thus the local triple total-$\tau$ factor is two-dimensional and the total-$1$ factor is one-dimensional. If $U=I$, choose the empty target list and the empty braid proves the claim. For the rest of the proof suppose $U\ne I$. For $n\ge2$, [F1] gives a finite QSD list of one-qubit gates and CNOTs; for $n=1$, use $U$ as its one-qubit list. Replace each nonadjacent two-qubit target on wires $i<j$ by adjacent SWAPs carrying wire $j$ next to $i$, the target on that adjacent pair, and the reverse SWAPs. On each computational basis vector, conjugation by this wire permutation transfers the same two target coordinates and undoing the permutation restores the others; hence the replacement is exactly the original gate. The resulting finite list contains only one-qubit and adjacent two-qubit targets. [F1, F6, F9, F10, given, algebra]

2.1 Let $M>0$ be the number of factors in the resulting list; positivity follows from $U\ne I$ in step 1.1. By [F14] choose an integer $N>\max\{2M/\epsilon,2/\eta_0\}$ and put $\delta=1/N$. Then $\delta<\epsilon/(2M)$ and $\delta<\eta_0/2$. For a one-qubit factor $G\in U(2)$ write $\det G=a+ib$; since $G$ is unitary, $a^2+b^2=1$. If $a=-1$, set $\alpha=i$; otherwise define $x=\sqrt{(1+a)/2},\qquad y=\operatorname{sgn}(b)\sqrt{(1-a)/2},\qquad \alpha=x+iy,$ with $\operatorname{sgn}(0)=1$. The roots exist by [F13], and direct squaring gives $\alpha^2=\det G$ and $|\alpha|=1$. Therefore $S=\alpha^{-1}G$ is unitary with determinant one. By [F2] and [A1], compile $S$ to a normalized braid word within $\delta$. If its Artin exponent sum is $k$, the physical action on the local total-$\tau$ code sector is within $\delta$ of $(R_1z^{-1})^k\alpha^{-1}G$. [A1, F2, F8, F13, F14, step 1.1, algebra]

3.1 For an adjacent two-qubit factor $G$, [F4] and [A1] give one normalized six-strand braid and a code-preserving ideal extension with full ambient operator error at most $\delta$, uniformly over all spectator fusion paths. If its exponent sum is $k$, [F8] multiplies both the physical word and ideal extension by the same scalar $R_1^k$; their norm error remains $\delta$ and the code target is $R_1^kG$. For a one-qubit word from step 2.1, use [F11]–[F12] to decompose the register by the selected triple's total charge and spectator fusion paths. On the two-dimensional total-$\tau$ sector define the ideal block to be the target $G$ times the phase $(R_1z^{-1})^k\alpha^{-1}$; on the one-dimensional total-$1$ sector define it to equal the physical braid. These blocks form a unitary preserving the code. Its full ambient norm difference from the physical word is at most $\delta$: the error is at most $\delta$ on the total-$\tau$ block by step 2.1 and zero on total charge $1$, and tensoring with spectator identities and taking an orthogonal direct sum does not increase the maximum block norm. [A1, F4, F8, F11, F12, step 2.1, algebra]

4.1 Each ideal extension preserves the code and its restriction to the code is the corresponding QSD factor multiplied by its recorded scalar. Their product therefore restricts to $\omega(U\otimes I_{V(\tau^n\to c)})$ for the product phase $\omega$. The physical/ideal factor errors are each at most $\delta$, so [F5] bounds the full product error by $M\delta<\epsilon/2$. Applying [F7] gives logical block error and leakage amplitude at most $M\delta<\epsilon$. For certified Cauchy target names [F3] guarantees that the B6 subsearch terminates; its density proof supplies no useful length or time cutoff. The only choice axiom is [A1], inherited from the density suppliers; all remaining arguments are finite-dimensional. [A1, F3, F5, F7, F8, step 1.1, step 3.1, algebra] ∎
