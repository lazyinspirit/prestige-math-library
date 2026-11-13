---
id: thm-expander-sync-thm-1-4
title: Regular spectral expansion implies synchronization — Theorem 1.4
kind: theorem
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-8ada42a8dac6-regular-psd-rigidity
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-global-synchrony
  - prop-expander-sync-psd-criterion
  - math:def-countable-choice
  - def-expander-prereq-phase-volume
  - math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
dependency_roles:
  lem-author-8ada42a8dac6-regular-psd-rigidity: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  prop-expander-sync-psd-criterion: mathematical-premise
  math:def-countable-choice: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 1, Abstract; Theorem 1.4; Section 5 proof; PDF p. 7, Abstract;
        Theorem 1.4; Section 5 proof; PDF p. 28, Abstract; Theorem 1.4; Section
        5 proof; PDF p. 29, Abstract; Theorem 1.4; Section 5 proof; PDF p. 30,
        Abstract; Theorem 1.4; Section 5 proof
      statement: Every $d$-regular $(n,d,\alpha)$-expander with $\alpha\le0.0816$ is
        globally synchronizing.
      hypotheses: "Conditions and scope retained in the extracted formulation: Every
        $d$-regular $(n,d,\\alpha)$-expander with $\\alpha\\le0.0816$ is
        globally synchronizing."
      reading_limits: Original PDF pp. 6–7 and 29–30 inspected in text, with images
        pp. 7, 29 and 30 viewed; phase-proof context pp. 10–18 and 23–26
        inspected during the associated PSD extension. Attribution only. Local
        proof uses five PSD helpers and the previously authored scalar interval
        certificate, not the original theorem as its own premise.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
formulation_deps:
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-global-synchrony
  - math:def-countable-choice
argument_deps:
  - lem-author-8ada42a8dac6-regular-psd-rigidity
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-global-synchrony
  - prop-expander-sync-psd-criterion
  - math:def-countable-choice
  - def-expander-prereq-phase-volume
  - math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
---

## Statement

Assume countable choice. Every $d$-regular $(n,d,\alpha)$-expander with **$d>0$** and $\alpha\le0.0816$ is globally synchronizing. Graphs may have loops, counted once in degrees. The explicit positive-degree condition separates the zero-degree boundary of the unrestricted extraction; the full positive-degree regular theorem and endpoint $0.0816$ are preserved.

## Facts & Assumptions

[F1] The graph and expander conventions are [[def-expander-sync-adjacency-expander]] and [[def-expander-sync-graph-notation]]. The critical-PSD conclusion under exactly these hypotheses is [[lem-author-8ada42a8dac6-regular-psd-rigidity]].

[F2] Under [[math:def-countable-choice]], [[prop-expander-sync-psd-criterion]] implies [[def-expander-sync-global-synchrony]] when all PSD equilibria synchronize.

[F3] Normalized phase volume is the complete probability measure of [[def-expander-prereq-phase-volume]]: for the quotient map $q$ and $D=(-\pi,\pi]^V$, a set $B$ is phase-measurable exactly when $q^{-1}(B)\cap D$ is Lebesgue measurable, and $\mu(B)=(2\pi)^{-n}\lambda_n(q^{-1}(B)\cap D)$.

[F4] Under [[math:def-countable-choice]], every affine hyperplane $\{x\in\mathbb R^n:\langle u,x\rangle=c\}$ with $n\ge1$, $u\ne0$ and $c\in\mathbb R$, and every subset of it, is Lebesgue measurable with measure zero ([[math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]], claim 1).

## Original claim and scope correction

The exact original extracted claim is retained as attribution:

Every $d$-regular $(n,d,\alpha)$-expander with $\alpha\le0.0816$ is globally synchronizing.

## Proof

**Given:** The graph and positive-degree expansion hypotheses, and the unrestricted extracted formulation for the boundary example.

**Goal:** Prove global synchrony under the stated hypotheses and verify the zero-degree boundary example.

1.1 Apply [F1] to the graph in the Statement. Positivity of $d$ is explicit, and the spectral expansion bound is exactly the required one, including every $\alpha\le0.0816$. Thus every equilibrium with positive-semidefinite Hessian is fully synchronized. [F1, given]

1.2 Take the edgeless graph on $n=2$ vertices, $d=0$ and $\alpha=0.0816$. It is $0$-regular, and $A-(d/n)J=0$, so the displayed expansion inequality is $0\le0$. In the homogeneous Kuramoto equation of [F2], $A=0$ makes each rotating-frame derivative zero. Hence the rotating-frame trajectory from every initial phase is constant and converges to a fully synchronized state exactly when its initial phase is fully synchronized. [F1, F2, given, algebra]

1.3 Let $S$ be the fully synchronized states in the two-vertex phase torus. In the unique representative square $D=(-\pi,\pi]^2$ of [F3], two coordinates are equal modulo $2\pi$ exactly when their representatives are equal: their difference lies in $(-2\pi,2\pi)$, whose only multiple of $2\pi$ is zero. Thus $q^{-1}(S)\cap D=\{(a,a):-\pi<a\le\pi\}$. This is a subset of the affine hyperplane $H=\{(a,b)\in\mathbb R^2:a-b=0\}$, with nonzero normal $u=(1,-1)$ and $c=0$. Applying [F4] in dimension two, under the stated countable-choice assumption, makes this representative set Lebesgue measurable with $\lambda_2(q^{-1}(S)\cap D)=0$. [F2, F3, F4, algebra]

2.1 The global-synchrony criterion [F2] applies under countable choice and yields convergence to a fully synchronized state from phase-volume almost every initial phase. This is the asserted global synchrony. [F2, step 1.1]

3.1 By [F3] and step 1.3, $S$ is phase-measurable and $\mu(S)=(2\pi)^{-2}\lambda_2(q^{-1}(S)\cap D)=0$. Its complement has phase volume one. By step 1.2 this complement is exactly the set of initial phases whose rotating-frame trajectories fail to converge to a fully synchronized state. Hence global synchrony fails by [F2]. This verifies a counterexample to the unrestricted frozen extraction; it makes no claim against the positive-degree theorem. [F2, F3, step 1.2, step 1.3, algebra] ∎

## Source notes

The original p. 7 theorem states no explicit $d>0$ condition. Its preceding p. 6 convention chooses $d^*=d$ for regular graphs; calling it an “expected average degree” alone does not exclude zero. Section 2.1 on p. 11 subsequently assumes connectedness while deriving phase estimates. The edgeless example is outside that local standing assumption. Final assessment must resolve the intended standing convention before attributing an original-article defect. The counterexample above concerns the actual unrestricted frozen predicate.

The proof follows the original Section 5 two-stage amplification and uses the same exact parameters and cap comparisons. Its scalar suppliers already provide rational interval certificates rather than floating-point table readings. The new regular PSD mass bootstrap is a direct composition of the regular Hessian test and constant-vector projection; it avoids importing a local-minimum-only version of Remark 2.7. No claim of PSD implying local minimality is made.
