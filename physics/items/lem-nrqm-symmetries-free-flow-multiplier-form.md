---
id: lem-nrqm-symmetries-free-flow-multiplier-form
aliases: [nrqm-symmetries-free-flow-multiplier-form]
kind: lemma
domain: mathematics
title: "The free flow as a unimodular multiplier in the momentum representation"
status: published
origin: session
dependency_level: 5
deps: [def-axiom-of-choice, def-complex-exponential, def-countable-choice, def-hilbert-space,
       def-projection-valued-measure, def-schwartz-space-and-its-seminorms, def-self-adjoint-positive-unitary-and-normal-operator,
       def-sobolev-space-wkp-and-its-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint,
       def-unbounded-integral-against-a-pvm, lem-nrqm-kinematics-componentwise-position-and-momentum,
       lem-nrqm-kinematics-momentum-representation, lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus,
       lem-nrqm-observables-l2-multiplication-spectral-measure,
       lem-schwartz-space-is-dense-in-l-two, thm-bounded-borel-pvm-integral,
       thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces,
       thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-plancherel,
       thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 7.3, printed pages 169-171 (PDF pages 181-183): the time evolution in the free case as multiplication by a unimodular function of the momentum variable, with the Fourier transform"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Sections 2.3 and 3.3, printed pages 15-25 (PDF pages 15-25): autonomous unitary evolution and Heisenberg-dynamics examples; the momentum-multiplier formula is proved locally and supported by the Teschl reference"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]) and the choice hypotheses of
the cited spectral suppliers. Fix an integer $r\ge1$, a mass parameter $m>0$ and
$\hbar>0$, let $H^{(r)}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ with the
componentwise operators $Q_{j},P_{k}$ of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]], let $U^{(r)}$ be
the momentum unitary of [[lem-nrqm-kinematics-momentum-representation]], and
let
$$H_{0}:=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2},\qquad D(H_{0})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),$$
which is self-adjoint with the displayed domain
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c) applied componentwise,
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a)). Write
$M_{a}$ for multiplication by a measurable function $a$ on
$L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$ and put $f_{t}(p):=e^{-it|p|^{2}/(2m\hbar)}$
([[def-complex-exponential]]). Then:

(a) $U^{(r)}H_{0}U^{(r)-1}=M_{|p|^{2}/(2m)}$ as self-adjoint operators, with
domain $D(M_{|p|^{2}/(2m)})=\{g\in L^{2}:\ |p|^{2}g\in L^{2}\}$;

(b) $U^{(r)}\,e^{-itH_{0}/\hbar}\,U^{(r)-1}=M_{f_{t}}$ for every $t\in\mathbb R$;

(c) for every $\psi\in H^{(r)}$, every $t$ and almost every $p$,
$$\bigl(U^{(r)}e^{-itH_{0}/\hbar}\psi\bigr)(p)=f_{t}(p)\,\bigl(U^{(r)}\psi\bigr)(p),\qquad \bigl|\bigl(U^{(r)}e^{-itH_{0}/\hbar}\psi\bigr)(p)\bigr|=\bigl|\bigl(U^{(r)}\psi\bigr)(p)\bigr|;$$
consequently the spectral outcome law of each $P_{k}$ is independent of $t$;
and $e^{-itH_{0}/\hbar}\mathcal S^{(r)}=\mathcal S^{(r)}$ for every $t$, where
$\mathcal S^{(r)}=\mathcal S(\mathbb R^{3};\mathbb C^{r})$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice; integers $r\ge1$; $m,\hbar>0$; the space $H^{(r)}$; the componentwise operators $Q_{j},P_{k}$; the momentum unitary $U^{(r)}$; the free operator $H_{0}$; a vector $\psi\in H^{(r)}$; a Schwartz class $u\in\mathcal S^{(r)}$; real $t$.

[F1] **Free operator.** $H_{0}=\frac{1}{2m}\sum_{k}P_{k}^{2}$ with domain $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ is self-adjoint; it is the componentwise assembly of the scalar free operators of [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (b), which are self-adjoint with domain $W^{2,2}(\mathbb R^{3};\mathbb C)$ per component and equal $-\frac{\hbar^{2}}{2m}\Delta$ on Schwartz classes ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b),(c), [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a), [[def-sobolev-space-wkp-and-its-norm]]).

[F2] **Momentum representation.** $U^{(r)}$ is unitary, $U^{(r)}D(P_{k})=D(M_{p_{k}})$ with $U^{(r)}P_{k}=M_{p_{k}}U^{(r)}$, and $U^{(r)}$ maps $\mathcal S^{(r)}$ onto itself and acts there by the componentwise Fourier transform with normalization $(2\pi\hbar)^{-3/2}$ ([[lem-nrqm-kinematics-momentum-representation]] clauses (a),(b), [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (b), [[def-schwartz-space-and-its-seminorms]]).

[F3] **Domain in momentum form.** With $p$ the momentum variable of [F2], $W^{2,2}(\mathbb R^{3};\mathbb C^{r})=\{\psi\in H^{(r)}:\ |p|^{2}U^{(r)}\psi\in L^{2}\}$ and $W^{1,2}(\mathbb R^{3};\mathbb C^{r})=\{\psi:p_{k}U^{(r)}\psi\in L^{2}\ \forall k\}$ as sets, by the Fourier characterization of integer-order Sobolev spaces read in the normalization of [F2] ([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[thm-plancherel]], [[def-sobolev-space-wkp-and-its-norm]]).

[F4] **Conjugation calculus.** For a unitary $W$ and a self-adjoint $K$ with spectral PVM $E_K$, the operator $WKW^{-1}$ with domain $WD(K)$ is self-adjoint with PVM $WE_K(\cdot)W^{-1}$ and flow $e^{-itWKW^{-1}/\hbar}=We^{-itK/\hbar}W^{-1}$ ([[lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus]] clause (a)), and if two self-adjoint operators have a common domain $D$ and agree on a dense linear subspace of $D$, then they are equal: their difference is symmetric on $D$ and vanishes on a dense subspace, hence is zero ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F5] **Multiplier spectral data.** For a real measurable finite-valued function $a$ the multiplication operator $M_{a}$ on $L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$ is self-adjoint with domain $\{g:ag\in L^{2}\}$ and spectral PVM $M_{\mathbf 1_{a^{-1}(B)}}$; for bounded Borel $h$ the bounded calculus satisfies $\Phi_{M_a}(h)=M_{h\circ a}$ and $\|M_{g}\|=\operatorname{ess\,sup}_{p}|g(p)|$ for bounded measurable $g$; these are the componentwise versions of the scalar multiplier facts ([[lem-nrqm-observables-l2-multiplication-spectral-measure]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-bounded-borel-pvm-integral]], [[thm-unbounded-borel-functional-calculus]], [[def-unbounded-integral-against-a-pvm]]).

[F6] **Density.** $\mathcal S^{(r)}$ is dense in $H^{(r)}$ ([[lem-schwartz-space-is-dense-in-l-two]]).

## Proof

**Proof technique:** direct; identify the momentum-space form of the free operator as a multiplier, obtain the flow by the conjugation calculus and read the modulus invariance and Schwartz preservation off the multiplier formula.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Momentum form of the free operator] Put $M:=M_{|p|^{2}/(2m)}$, self-adjoint with domain $D(M)=U^{(r)}W^{2,2}$ by [F3] and [F5], and put $A:=U^{(r)-1}MU^{(r)}=U^{(r)*}MU^{(r)}$; by [F4] $A$ is self-adjoint with domain $D(A)=U^{(r)-1}D(M)=W^{2,2}$. On a Schwartz class $u\in\mathcal S^{(r)}$ one has $P_{k}^{2}u\in\mathcal S^{(r)}$ by [F2] and hence $H_{0}u=\frac{1}{2m}\sum_{k}P_{k}^{2}u$ by [F1], while $U^{(r)}H_{0}u=M_{|p|^{2}/(2m)}U^{(r)}u$ by [F2]; thus $Au=H_{0}u$ for every $u\in\mathcal S^{(r)}$. Both operators are self-adjoint with the common domain $W^{2,2}$ and agree on the dense subspace $\mathcal S^{(r)}$ [F6], so $A=H_{0}$ by [F4], which is (a). [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 [Flow] Applying the flow identity of [F4] to $A=U^{(r)-1}MU^{(r)}=H_{0}$ gives $U^{(r)-1}\,e^{-itM/\hbar}\,U^{(r)}=e^{-itH_{0}/\hbar}$, hence by the functional calculus of [F5] $M_{f_{t}}=e^{-itM/\hbar}$, $f_{t}(p)=e^{-it|p|^{2}/(2m\hbar)}$, and therefore $U^{(r)}e^{-itH_{0}/\hbar}U^{(r)-1}=M_{f_{t}}$, which is (b). [step 1.1, F4, F5, given, algebra]

3.1 [Pointwise phase and modulus] Writing $g:=U^{(r)}\psi$, step 2.1 gives $U^{(r)}e^{-itH_{0}/\hbar}\psi=M_{f_{t}}g$ with $|f_{t}(p)|=1$ for every $p$, so the two displays of (c) hold for almost every $p$. [step 2.1, F2, given, algebra]

3.2 [Schwartz preservation] Let $u\in\mathcal S^{(r)}$; by [F2], $g:=U^{(r)}u\in\mathcal S^{(r)}$. The function $p\mapsto f_{t}(p)g(p)$ is smooth, and every seminorm $\sup_{p}|p^{\alpha}\partial^{\beta}(f_{t}g)(p)|$ is finite because $f_{t}$ is a unimodular exponential of a polynomial and hence has derivatives of polynomial growth while $g$ is Schwartz; thus $f_{t}g\in\mathcal S^{(r)}$, and $U^{(r)-1}(f_{t}g)\in\mathcal S^{(r)}$ by [F2] again. Applying the same argument to $-t$ gives the reverse inclusion, so $e^{-itH_{0}/\hbar}\mathcal S^{(r)}=\mathcal S^{(r)}$. [step 2.1, F2, F5, given, algebra]

4.1 [Momentum laws] By [F2], $E_{P_{k}}(B)=U^{(r)-1}M_{\mathbf 1_B(p_{k})}U^{(r)}$, so for a unit $\psi$ the law is $\mu^{P_{k}}_{\psi}(B)=\|M_{\mathbf 1_B(p_{k})}U^{(r)}\psi\|^{2}=\int_{\{p_{k}\in B\}}|(U^{(r)}\psi)(p)|^{2}dp$; by step 3.1 the modulus $|(U^{(r)}e^{-itH_{0}/\hbar}\psi)(p)|$ equals $|(U^{(r)}\psi)(p)|$ almost everywhere, so the integral is independent of $t$. [step 3.1, F2, F5, given, algebra]

5.1 [Assembly] Step 1.1 proves (a), step 2.1 proves (b), and steps 3.1, 3.2 and 4.1 prove (c): the pointwise phase and modulus, the Schwartz invariance and the momentum laws. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **What is not claimed.** No free propagator integral kernel, no pointwise trajectory of the particle, and no assertion that the momentum representative's modulus is measurable-free (it is an $L^{2}$ class; the invariance is that of the class of the modulus) appear in this lemma.
- **Scope.** The statement is purely mathematical, about the free operator on $L^{2}(\mathbb R^{3};\mathbb C^{r})$; the physical reading of the momentum laws is that of the observable and probability postulate.
