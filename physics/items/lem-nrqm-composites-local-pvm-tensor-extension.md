---
id: lem-nrqm-composites-local-pvm-tensor-extension
aliases: [nrqm-composites-local-pvm-tensor-extension]
kind: lemma
domain: mathematics
title: "Local PVM extension: tensoring a projection-valued measure with the identity"
status: draft
origin: session
dependency_level: 2
deps: [def-borel-sigma-algebra, def-compact-space, def-countable-choice, def-hilbert-orthogonal-projection, def-hilbert-space, def-locally-compact-space, def-measurable-space, def-operator-norm, def-projection-valued-measure, def-radon-measure-on-an-lch-space, def-regular-borel-measure-on-an-lch-space, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-hilbert-tensor-construction, thm-bounded-borel-pvm-integral]
dependency_roles:
  def-borel-sigma-algebra: mathematical-premise
  def-compact-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-locally-compact-space: mathematical-premise
  def-measurable-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-radon-measure-on-an-lch-space: mathematical-premise
  def-regular-borel-measure-on-an-lch-space: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009 (author-hosted full monograph, 317 pages): Section 1.4 printed pages 45-47 (tensor construction and product bases) and Section 3.1 printed pages 87-98 (projection-valued spectral measures and their scalar measures); PDF page = printed page + 12"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Section 1, chapter pages 1-7: the tensor product of two state spaces and its linear structure"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,K$ be
nonzero complex Hilbert spaces ([[def-hilbert-space]]) and let
$H\widehat\otimes K$ be their completed tensor product with inclusion $\kappa$
([[lem-nrqm-composites-hilbert-tensor-construction]]). Let $(X,\Sigma)$ be a
measurable space ([[def-measurable-space]]) and let $E$ be a projection valued
measure on $(X,\Sigma)$ acting on $H$ ([[def-projection-valued-measure]]).
Define, for $B\in\Sigma$,
$$F(B):=E(B)\otimes I_{K}\in\mathcal B(H\widehat\otimes K),$$
the bounded tensor operator of [[lem-nrqm-composites-bounded-tensor-maps]]
clause (a). Then:

(a) $F$ is a projection valued measure on $(X,\Sigma)$ acting on
$H\widehat\otimes K$;

(b) for every bounded $\Sigma$-measurable function $f:X\to\mathbb C$, writing
$\Phi_{F}(f)=\int f\,dF$ and $\Phi_{E}(f)=\int f\,dE$ for the integrals of
[[thm-bounded-borel-pvm-integral]], one has
$$\Phi_{F}(f)=\Phi_{E}(f)\otimes I_{K};$$

(c) if $(S_{n})$ is a sequence of bounded operators on $H$ with
$\sup_{n}\|S_{n}\|<+\infty$ and $S_{n}x\to Sx$ for every $x\in H$, then
$(S_{n}\otimes I_{K})z\to(S\otimes I_{K})z$ for every
$z\in H\widehat\otimes K$;

(d) if $X$ is a locally compact Hausdorff space ([[def-locally-compact-space]]),
$\Sigma$ its Borel $\sigma$-algebra ([[def-borel-sigma-algebra]]) and $E$
regular in the sense of [[def-projection-valued-measure]], then $F$ is regular.

Clause (d) is what makes $F$ a regular projection valued measure on
$\mathbb R$ in the application to assigned sharp observables, so that the
converse direction of the spectral theorem supplies a self-adjoint operator
having $F$ as its spectral measure. No assertion is made about unbounded
operators in this lemma itself.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; nonzero complex Hilbert spaces $H,K$; the completed tensor product $H\widehat\otimes K$ with inclusion $\kappa$; a measurable space $(X,\Sigma)$; a projection valued measure $E$ on $(X,\Sigma)$; the operators $S_{n},S\in\mathcal B(H)$; a bounded measurable $f:X\to\mathbb C$.

[F1] **Tensor-product maps.** By [[lem-nrqm-composites-bounded-tensor-maps]] clauses (a)-(d), for all bounded $S\in\mathcal B(H,H')$, $T\in\mathcal B(K,K')$ there is a unique bounded $S\otimes T$ with $(S\otimes T)\kappa(u\otimes v)=\kappa'(Su\otimes Tv)$, satisfying $\|S\otimes T\|\le\|S\|\,\|T\|$ ([[def-operator-norm]]), $(S\otimes T)^{*}=S^{*}\otimes T^{*}$ and $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$; the assignment is linear in each argument, and $\kappa[H\odot K]$ is dense in $H\widehat\otimes K$ ([[lem-nrqm-composites-hilbert-tensor-construction]] clause (c)).

[F2] **Projection valued measure.** $E(B)$ is an orthogonal projection on $H$ for every $B\in\Sigma$ ([[def-hilbert-orthogonal-projection]]), $E(\varnothing)=0$, $E(X)=I$, $E(B\cap C)=E(B)E(C)$, and for pairwise disjoint $B_{n}$ with union $B$ one has $E(B)x=\sum_{n}E(B_{n})x$ in norm for every $x\in H$ ([[def-projection-valued-measure]]).

[F3] **Bounded PVM integral.** For bounded measurable $f$ there is a unique bounded $\Phi_{E}(f)=\int f\,dE$ with $\langle\Phi_{E}(f)x,y\rangle=\int f\,dE_{x,y}$; for every sequence of complex simple functions $s_{n}$ with $\|f-s_{n}\|_{\infty}\to0$ one has $\|\Phi_{E}(f)-\int s_{n}\,dE\|\to0$, and $\|\Phi_{E}(f)\|\le\|f\|_{\infty}$ ([[thm-bounded-borel-pvm-integral]]).

[F4] **Regular projection valued measures.** When $X$ is locally compact Hausdorff and $\Sigma$ its Borel $\sigma$-algebra, $E$ is regular exactly when every finite positive measure $E_{x}(B)=\langle E(B)x,x\rangle$ is a regular Borel measure: Radon, meaning finite on compact sets, outer regular on Borel sets and inner regular on open sets ([[def-radon-measure-on-an-lch-space]]), and inner regular on every Borel set ([[def-regular-borel-measure-on-an-lch-space]]).

## Proof

**Proof technique:** direct; first establish that the tensor family is a
projection valued measure, including strong countable additivity; then use its
bounded PVM integral, extend the simple-function identity by uniform
approximation, and prove regularity of its scalar measures first on finite
algebraic tensors and then on the completed product by density.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Strong continuity of tensoring with the identity] Let $M:=\sup_{n}\|S_{n}\|<+\infty$. Strong convergence gives $\|Sx\|=\lim_{n}\|S_{n}x\|\le M\|x\|$ for every $x\in H$, so $\|S\|\le M$. For $z\in H\widehat\otimes K$ and $\varepsilon>0$, density [F1] gives a finite sum $z_{0}=\kappa\bigl(\sum_{i=1}^{m}u_{i}\otimes v_{i}\bigr)$ with $\|z-z_{0}\|<\varepsilon/(4M+1)$. By linearity and the norm estimate [F1], $\|(S_{n}\otimes I)-(S\otimes I)\|\le M+\|S\|\le2M$, and hence $\|((S_{n}\otimes I)-(S\otimes I))(z-z_{0})\|<\varepsilon/2$ for every $n$ (also when $M=0$, when the left side is zero). On the finite sum, [F1] gives $\|((S_{n}\otimes I)-(S\otimes I))z_{0}\|\le\sum_{i=1}^{m}\|(S_{n}-S)u_{i}\|\,\|v_{i}\|\to0$. This is less than $\varepsilon/2$ for all large $n$, and the triangle inequality proves (c). [F1, algebra, choose]

1.2 [Projection structure] For $B,C\in\Sigma$ one has $F(B)^{*}=(E(B)\otimes I)^{*}=E(B)^{*}\otimes I^{*}=E(B)\otimes I=F(B)$ and $F(B)^{2}=(E(B)\otimes I)(E(B)\otimes I)=E(B)^{2}\otimes I^{2}=E(B)\otimes I=F(B)$, so $F(B)$ is an orthogonal projection; moreover $F(B\cap C)=(E(B)E(C))\otimes I=(E(B)\otimes I)(E(C)\otimes I)=F(B)F(C)$, $F(\varnothing)=0\otimes I=0$ and $F(X)=I\otimes I=I$. [F1, F2, algebra]

2.1 [Strong countable additivity] Let $(B_{n})$ be pairwise disjoint with union $B$. For finite $N$ the multiplicativity of step 1.2 and $F(B_{i})F(B_{j})=F(B_{i}\cap B_{j})=0$ for $i\ne j$ give $\sum_{n\le N}F(B_{n})=F(\bigcup_{n\le N}B_{n})=E(\bigcup_{n\le N}B_{n})\otimes I$. The orthogonal projections $E(\bigcup_{n\le N}B_{n})$ are uniformly bounded by one and converge strongly to $E(B)$ by [F2], so step 1.1 gives $\sum_{n\le N}F(B_{n})\to F(B)$ strongly. Together with step 1.2, this proves (a), so $F$ is now a projection valued measure. [F1, F2, step 1.1, step 1.2, algebra]

3.1 [Integral identity] Since step 2.1 proves that $F$ is a projection valued measure, the bounded PVM integral theorem [F3] applies to both $E$ and $F$. For a complex simple function $s=\sum_{k=1}^{m}\alpha_{k}\mathbf 1_{B_{k}}$ with $B_{k}\in\Sigma$ pairwise disjoint, linearity of $S\mapsto S\otimes I$ and of the integral [F1, F3] give $\Phi_{F}(s)=\sum_{k}\alpha_{k}F(B_{k})=\sum_{k}\alpha_{k}(E(B_{k})\otimes I)=\bigl(\sum_{k}\alpha_{k}E(B_{k})\bigr)\otimes I=\Phi_{E}(s)\otimes I$. For bounded measurable $f$ choose simple $s_{n}$ with $\|f-s_{n}\|_{\infty}\le 2^{-n}$ by partitioning a square containing the bounded range of $f$ into finitely many small squares; the norm bounds [F1, F3] give $\|\Phi_{F}(f)-\Phi_{F}(s_{n})\|\le\|f-s_{n}\|_{\infty}\to0$ and $\|\Phi_{E}(f)\otimes I-\Phi_{E}(s_{n})\otimes I\|\le\|f-s_{n}\|_{\infty}\to0$, so uniqueness of limits yields $\Phi_{F}(f)=\Phi_{E}(f)\otimes I$, which is (b). [F1, F3, step 2.1, construct, algebra]

3.2 [Regularity on finite algebraic tensors] Assume $X$ locally compact Hausdorff with Borel $\sigma$-algebra and $E$ regular, and let $z_{0}=\kappa\bigl(\sum_{i=1}^{m}u_{i}\otimes v_{i}\bigr)$. Put $C:=\sum_{i=1}^{m}\|v_{i}\|^{2}$. If $m=0$ or $C=0$, then $z_{0}=0$, so $\nu_{z_{0}}$ is the zero measure and is inner regular on every Borel set, taking the compact set $\varnothing$. Otherwise $m\ge1$ and $C>0$. For Borel $B$, $F(B)z_{0}=\kappa\bigl(\sum_{i=1}^{m}E(B)u_{i}\otimes v_{i}\bigr)$ by [F1], so the Cauchy-Schwarz inequality for the Euclidean pairing gives $\nu_{z_{0}}(B):=\langle F(B)z_{0},z_{0}\rangle=\bigl\|\sum_{i}E(B)u_{i}\otimes v_{i}\bigr\|^{2}\le C\sum_{i}\langle E(B)u_{i},u_{i}\rangle$; also $\nu_{z_{0}}(X)=\|z_{0}\|^{2}<+\infty$. Given $\varepsilon>0$, each finite measure $\langle E(\cdot)u_{i},u_{i}\rangle$ is regular by [F4], so there are compact $K_{i}\subseteq B$ with $\langle E(B\setminus K_{i})u_{i},u_{i}\rangle<\varepsilon/(mC)$; for the compact $K=\bigcup_{i}K_{i}$ one has $B\setminus K\subseteq B\setminus K_{i}$ and hence $\nu_{z_{0}}(B)-\nu_{z_{0}}(K)=\nu_{z_{0}}(B\setminus K)\le C\sum_{i}\langle E(B\setminus K_{i})u_{i},u_{i}\rangle<\varepsilon$. Thus $\nu_{z_{0}}$ is inner regular on Borel sets. [F1, F4, step 2.1, algebra, choose]

4.1 [Regularity on the completed product] Keep the hypotheses of step 3.2 and let $z\in H\widehat\otimes K$, $B$ Borel, $\varepsilon>0$; if $z=0$ there is nothing to prove, so let $z\ne0$ and choose $z_{0}=\kappa(\sum_{i}u_{i}\otimes v_{i})$ with $\|z-z_{0}\|\le\sqrt{\varepsilon}/2$ by [F1], then a compact $K\subseteq B$ with $\nu_{z_{0}}(B\setminus K)\le\varepsilon/4$ by step 3.2. Since $F$ is projection valued by step 2.1, $\nu_{z}(B)-\nu_{z}(K)=\|F(B\setminus K)z\|^{2}\le\bigl(\|F(B\setminus K)(z-z_{0})\|+\|F(B\setminus K)z_{0}\|\bigr)^{2}\le\bigl(\sqrt{\varepsilon}/2+\sqrt{\varepsilon}/2\bigr)^{2}=\varepsilon$, so $\nu_{z}$ is inner regular on Borel sets; it is finite since $\nu_{z}(X)=\|z\|^{2}<+\infty$. Inner regularity applied to the complement gives outer regularity: for Borel $E_{0}$ and $\eta>0$ choose compact $L\subseteq X\setminus E_{0}$ with $\nu_{z}(X\setminus E_{0})-\nu_{z}(L)<\eta$, so the open $V=X\setminus L$ contains $E_{0}$ and $\nu_{z}(V)<\nu_{z}(E_{0})+\eta$. Hence every $F_{z}$ is a regular Borel measure and $F$ is regular, which is (d). [F1, F4, step 2.1, step 3.2, algebra, choose]

5.1 [Assembly] Step 2.1 proves (a), step 3.1 proves (b), step 1.1 proves (c), and steps 3.2 and 4.1 prove (d). [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **Use.** The lemma is the mathematical core of the local readout of a
  subsystem quantity: on a composite $H\widehat\otimes K$, the outcome
  structure of a quantity of the first factor alone is $E(\cdot)\otimes I_{K}$,
  and by clause (d) together with the converse direction of the spectral
  theorem it is the spectral measure of a self-adjoint operator on the
  composite. Nothing here is a physical statement about measurements; the
  physical reading is fixed on the composites page.
- **Countable Choice.** The choice hypothesis enters through the tensor
  construction and is carried as stated; clause (c) additionally uses the
  density of the algebraic tensor product, which is part of that construction.
