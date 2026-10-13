---
id: lem-nrqm-observables-l2-multiplication-spectral-measure
aliases: [nrqm-observables-l2-multiplication-spectral-measure]
kind: lemma
domain: mathematics
title: "Spectral measure of a real L2 multiplication operator"
status: published
origin: pipeline
dependency_level: 3
deps: [cor-second-countable-lch-locally-finite-borel-measures-are-regular, def-axiom-of-choice, def-countable-choice, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-projection-valued-measure, def-regular-borel-measure-on-an-lch-space, def-unbounded-integral-against-a-pvm, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-nrqm-observables-spectral-support-and-outcome-law, lem-scalar-and-complex-measures-from-a-pvm, lem-unbounded-pvm-integral-is-well-defined-and-closed, thm-bounded-borel-pvm-integral, thm-cauchy-schwarz-in-an-inner-product-space, thm-dominated-convergence, thm-spectral-theorem-for-unbounded-self-adjoint-operators]
dependency_roles:
  cor-second-countable-lch-locally-finite-borel-measures-are-regular: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-regular-borel-measure-on-an-lch-space: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  lem-nrqm-observables-spectral-support-and-outcome-law: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Williams, Lecture Notes on the Spectral Theorem, Examples 7.5, 7.7 and 7.25, printed pp. 29-34 (multiplication operators, their spectral measure and spectrum)"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.2, printed pages 58-69 (multiplication operators and their domains)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $(X,\Sigma,\mu)$ be a $\sigma$-finite measure space with $\mu(X)>0$, let $m:X\to\mathbb R$ be measurable and finite $\mu$-almost everywhere, and on the complex Hilbert space $H=L^{2}(X,\mu;\mathbb C)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-hilbert-space]]) let
$$D(M_{m})=\Bigl\{f\in H:\int_{X}|m|^{2}|f|^{2}\,d\mu<\infty\Bigr\},\qquad M_{m}f=mf .$$
Then:

(a) $M_m$ is self-adjoint on $D(M_m)$.

(b) The assignment $E(B):=M_{\mathbf 1_{m^{-1}(B)}}$ on Borel sets $B\subseteq\mathbb R$ is a regular projection-valued measure on the Borel $\sigma$-algebra of $\mathbb R$ ([[def-projection-valued-measure]]), and for a unit vector $\psi\in H$
$$\|E(B)\psi\|^{2}=\int_{m^{-1}(B)}|\psi|^{2}\,d\mu .$$

(c) The operator identity $\int_{\mathbb R}\lambda\,dE(\lambda)=M_{m}$ holds with domain $D(M_{m})$ ([[def-unbounded-integral-against-a-pvm]]); consequently $E$ is the spectral projection-valued measure of $M_{m}$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

(d) $E(B)=0$ if and only if $\mu(m^{-1}(B))=0$, and the spectrum $\sigma(M_{m})$ equals the essential range of $m$:
$$\sigma(M_{m})=\{\,t\in\mathbb R:\mu(m^{-1}(t-\varepsilon,t+\varepsilon))>0\ \text{for every}\ \varepsilon>0\,\}.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]); a $\sigma$-finite measure space $(X,\Sigma,\mu)$; a real measurable finite $\mu$-a.e. multiplier $m$; the operator $M_{m}$ on $H=L^{2}(X,\mu;\mathbb{C})$; Borel sets $B,B_{n}\subseteq\mathbb R$; a unit vector $\psi\in H$.

[F1] $H=L^2(X,\mu;\mathbb C)$ has inner product $\langle f,g\rangle=\int_X f\overline g\,d\mu$, Cauchy-Schwarz holds in this Hilbert space, and $m$ is real-valued and measurable. The density, symmetry and adjoint-domain checks for $M_m$ are supplied locally in step 1.1 ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] **Projection-valued measures.** A PVM is a map into orthogonal projections with $E(\varnothing)=0$, $E(X_{0})=I$ and $E(B\cap C)=E(B)E(C)$ on its measurable space $X_{0}$, strongly countably additive on disjoint unions; its scalar measures $E_{x}(B)=\langle E(B)x,x\rangle=\|E(B)x\|^{2}$ are finite positive measures ([[def-projection-valued-measure]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[F3] **Bounded integrals against a PVM.** For bounded Borel $g$ there is a unique operator $\Phi_{E}(g)$ with $\langle\Phi_{E}(g)x,y\rangle=\int g\,dE_{x,y}$; it satisfies $\langle\Phi_{E}(g)x,x\rangle=\int g\,dE_{x}$, $\|\Phi_{E}(g)\|\le\|g\|_{\infty}$, and it is multiplicative and adjoint preserving ([[thm-bounded-borel-pvm-integral]]).

[F4] **Unbounded integrals.** For Borel $f$ the operator $f(E)$ has domain $D(f(E))=\{x:\int|f|^{2}dE_{x}<\infty\}$ and $f(E)x=\lim_{n}\Phi_{E}(f\mathbf 1_{\{|f|\le n\}})x$ ([[def-unbounded-integral-against-a-pvm]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

[F5] **Spectral uniqueness.** A self-adjoint operator has a unique regular PVM on the Borel sets of $\mathbb R$ representing it; conversely, if a regular PVM $E'$ satisfies $\int\lambda\,dE'(\lambda)=T$ with domain $\{x:\int\lambda^{2}dE'_{x}<\infty\}$, then $E'$ is the spectral PVM of the self-adjoint operator $T$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F6] **Regularity of finite Borel measures on the line.** Every finite Borel measure on the second-countable locally compact Hausdorff space $\mathbb R$ is regular ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[def-regular-borel-measure-on-an-lch-space]]).

[F7] **Convergence theorems.** If $|f_{n}|\le g$ with $g$ integrable and $f_{n}\to f$ pointwise, then $\int f_{n}\to\int f$ ([[thm-dominated-convergence]]).

[F8] **Support of the spectral measure.** For a self-adjoint operator with spectral PVM $F$ one has $F(\mathbb R\setminus\sigma(T))=0$, and $F(U)\ne0$ for every nonempty relatively open $U\subseteq\sigma(T)$: the support of $F$ is the spectrum ([[lem-nrqm-observables-spectral-support-and-outcome-law]] clause (a)).

## Proof

1.1 [Self-adjoint multiplication and indicator PVM] Put $X_n:=\{x:|m(x)|\le n\}$. For $f\in H$, $f\mathbf1_{X_n}\in D(M_m)$ and $f\mathbf1_{X_n}\to f$ in $H$ by dominated convergence, so $D(M_m)$ is dense. For $f,g\in D(M_m)$, Cauchy-Schwarz makes the products integrable and real-valuedness of $m$ gives $\langle M_mf,g\rangle=\langle f,M_mg\rangle$, so $M_m$ is symmetric. If $h\in D(M_m^*)$ and $k:=M_m^*h$, the adjoint identity holds for every $f\in D(M_m)$. For each $n$ take $f=(mh-k)\mathbf1_{X_n}$; this vector lies in $D(M_m)$ because $m$ is bounded on $X_n$, and the identity gives $0=\langle M_mf,h\rangle-\langle f,k\rangle=\int_{X_n}|mh-k|^2d\mu$. Thus $mh=k$ a.e. on every $X_n$, and since $\bigcup_nX_n$ has full measure, $mh=k\in H$. Therefore $h\in D(M_m)$ and $M_m^*h=M_mh$, so $M_m=M_m^*$; this proves (a). [F1, F7, algebra] For a Borel set $B$ the class $\mathbf 1_{m^{-1}(B)}$ is real measurable and bounded, so multiplication by it is a bounded self-adjoint operator on $H$ whose square is multiplication by $\mathbf 1_{m^{-1}(B)}^{2}=\mathbf 1_{m^{-1}(B)}$: hence $E(B)=M_{\mathbf 1_{m^{-1}(B)}}$ is an orthogonal projection. Moreover $E(\varnothing)=0$ and $E(\mathbb R)=I$ because $m$ is finite $\mu$-a.e., and $E(B)E(C)=M_{\mathbf 1_{m^{-1}(B)}\mathbf 1_{m^{-1}(C)}}=E(B\cap C)$ because $m^{-1}(B)\cap m^{-1}(C)=m^{-1}(B\cap C)$ up to a $\mu$-null set. For pairwise disjoint Borel $B_{n}$ with union $B$ the multiplicativity of classes gives $\|E(B)h-\sum_{n\le N}E(B_{n})h\|^{2}=\int|(\mathbf 1_{B}-\sum_{n\le N}\mathbf 1_{B_{n}})\circ m|^{2}|h|^{2}d\mu$ for every $h\in H$, and the integrand is bounded by $|h|^{2}$ and tends to $0$ pointwise, so dominated convergence [F7] makes the truncated sums converge in norm to $E(B)h$; thus $E$ is strongly countably additive and is a PVM. [given, F2, F7, algebra]

2.1 [Regularity] For $x\in H$ the scalar measure of [F2] is $E_{x}(B)=\langle E(B)x,x\rangle=\int_{m^{-1}(B)}|x|^{2}d\mu$, a finite Borel measure on $\mathbb R$ of total mass $\|x\|^{2}$; $\mathbb R$ is locally compact, Hausdorff and second countable, so [F6] makes $E_{x}$ regular. As this holds for every $x$, $E$ is a regular PVM. [step 1.1, F2, F6, algebra]

2.2 [The integral of the identity is $M_{m}$] Let $g$ be bounded Borel. For indicators $g=\mathbf 1_{B}$ the pairing identity $\langle\Phi_{E}(g)x,y\rangle=\int g\,dE_{x,y}$ and the scalar measures of [F2] give $\langle\Phi_{E}(\mathbf 1_{B})x,y\rangle=\int_{m^{-1}(B)}x\overline y\,d\mu=\langle M_{\mathbf 1_{B}\circ m}x,y\rangle$, so $\Phi_{E}(\mathbf 1_{B})=M_{\mathbf 1_{B}\circ m}$; by linearity of $\Phi_{E}$ and [F3] the identity passes to simple functions, and uniform approximation with $\|\Phi_{E}(g)\|\le\|g\|_{\infty}$ [F3] gives $\Phi_{E}(g)=M_{g\circ m}$ for every bounded Borel $g$. For the unbounded identity function $f(\lambda)=\lambda$ the scalar measures give $\int\lambda^{2}dE_{x}=\int|m|^{2}|x|^{2}d\mu$, so by [F4] the domain of $f(E)$ is exactly $D(M_{m})$, and for $x\in D(M_{m})$ the truncations satisfy $f\mathbf 1_{\{|f|\le n\}}(E)x=M_{m\mathbf 1_{\{|m|\le n\}}}x$ by the bounded case; these converge to $mx$ in $H$ by dominated convergence [F7] applied to $|m\mathbf 1_{\{|m|\le n\}}-m|^{2}|x|^{2}\le4|m|^{2}|x|^{2}$. Hence $f(E)x=M_{m}x$ on $D(M_{m})$. [step 1.1, F1, F2, F3, F4, F7, algebra]

3.1 [The spectral PVM and the scalar law] By step 2.2 the regular PVM $E$ of step 1.1 satisfies $\int\lambda\,dE(\lambda)=M_{m}$ with the displayed domain, and $M_{m}$ is self-adjoint by [F1]; the converse uniqueness clause of [F5] therefore identifies $E$ as the spectral projection-valued measure of $M_{m}$. For a unit vector $\psi$ the scalar law is $\|E(B)\psi\|^{2}=\int_{m^{-1}(B)}|\psi|^{2}d\mu$ by step 2.1. [step 1.1, step 2.1, step 2.2, F1, F5, algebra]

4.1 [Vanishing sets and the spectrum] If $E(B)=0$ then $0=\|E(B)h\|^{2}=\int_{m^{-1}(B)}|h|^{2}d\mu$ for every $h\in H$; were $\mu(m^{-1}(B))>0$, $\sigma$-finiteness would give a subset $A\subseteq m^{-1}(B)$ of positive finite measure, and $h=\mathbf 1_{A}$ would give $\int_{m^{-1}(B)}|h|^{2}d\mu=\mu(A)>0$, a contradiction; hence $\mu(m^{-1}(B))=0$. Conversely, if $\mu(m^{-1}(B))=0$ then the multiplier $\mathbf 1_{m^{-1}(B)}$ vanishes as an $L^{2}$ class and $E(B)=0$. By step 3.1, $E$ is the spectral PVM of $M_{m}$, so [F8] identifies its support with $\sigma(M_{m})$; by the vanishing criterion just proved the support is the set of $t$ with $\mu(m^{-1}(t-\varepsilon,t+\varepsilon))>0$ for every $\varepsilon>0$, namely the essential range of $m$. This proves (d) and completes the argument. [step 1.1, step 2.1, step 3.1, F2, F8, algebra] ∎
