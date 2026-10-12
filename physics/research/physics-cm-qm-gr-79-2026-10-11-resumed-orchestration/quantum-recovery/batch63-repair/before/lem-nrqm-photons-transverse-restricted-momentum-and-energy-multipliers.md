---
id: lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers
kind: lemma
title: "Restricted momentum and energy multipliers of the transverse one-photon space"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [lem-nrqm-observables-l2-multiplication-spectral-measure, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-unbounded-integral-against-a-pvm, def-projection-valued-measure, def-hilbert-orthogonal-projection, lem-orthogonal-projection-is-linear-self-adjoint-contractive, cor-graph-of-a-measurable-function-is-lebesgue-null, thm-polar-coordinates-formula-for-lebesgue-measure, prop-countable-subsets-of-rn-are-lebesgue-null, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  lem-unbounded-pvm-integral-is-well-defined-and-closed: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  lem-orthogonal-projection-is-linear-self-adjoint-contractive: mathematical-premise
  cor-graph-of-a-measurable-function-is-lebesgue-null: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  prop-countable-subsets-of-rn-are-lebesgue-null: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.4 printed pages 73-74 (PDF pages 85-86): multiplication operators, their spectra and the absence of eigenvalues on null level sets"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Section 1.4 printed pages 7-9 (PDF pages 10-12): second-quantised single-particle operators and the energy of free modes"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of
the cited multiplication and spectral items. On
$L^{2}(\mathbb R^{3};\mathbb C^{3})$ ([[def-l-p-space-as-a-quotient-by-null-functions]])
put
$$\mathfrak h:=\Bigl\{f:\ k\cdot f(k)=0\ \text{for almost every }k\Bigr\},$$
a closed subspace of $L^{2}(\mathbb R^{3};\mathbb C^{3})$, and write
$\Pi(k):=\mathrm{id}-|k|^{-2}kk^{\mathsf T}$ for $k\ne0$, $\Pi(0):=0$, so that
$\mathfrak h=\operatorname{ran}M_{\Pi}$ with $M_{\Pi}$ the bounded
multiplication by $\Pi$ ([[def-hilbert-orthogonal-projection]],
[[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]). Let
$c,\hbar>0$ with $c$ in $\mathrm m\,\mathrm s^{-1}$ and $\hbar$ in
$\mathrm J\,\mathrm s$, and for $j\in\{1,2,3\}$ and $m\in\{\hbar k_{j},\ \hbar c|k|\}$
define
$$D(M_{m}^{\mathfrak h}):=\{f\in\mathfrak h:\ \textstyle\int_{\mathbb R^{3}}m(k)^{2}\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k<\infty\},\qquad M_{m}^{\mathfrak h}f:=mf .$$
Then for each such $m$:

(a) $M_{m}^{\mathfrak h}$ is a densely defined self-adjoint operator on the
Hilbert space $\mathfrak h$ ([[def-hilbert-space]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), and it is the
restriction to $\mathfrak h$ of the self-adjoint multiplier $M_{m}$ on
$L^{2}(\mathbb R^{3};\mathbb C^{3})$ of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]];

(b) its spectral projection-valued measure $E_{m}$ is given by
$$E_{m}(B)=M_{\mathbf 1_{m^{-1}(B)}}\bigr|_{\mathfrak h}\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
and for every unit $f\in\mathfrak h$ the outcome law $B\mapsto\|E_{m}(B)f\|^{2}$
is the push-forward of the finite measure $|f|^{2}\,d^{3}k\big|_{\mathfrak h}$
under $k\mapsto m(k)$; in particular for $m=\hbar k_{j}$ it is the push-forward
under $k\mapsto\hbar k_{j}$ and for $m=\hbar c|k|$ it is the push-forward under
$k\mapsto\hbar c|k|$ ([[def-projection-valued-measure]],
[[lem-unbounded-pvm-integral-is-well-defined-and-closed]]);

(c) $M_{m}^{\mathfrak h}$ has no eigenvalues: for no $\lambda\in\mathbb R$ is
there a nonzero $f\in D(M_{m}^{\mathfrak h})$ with $M_{m}^{\mathfrak h}f=\lambda f$;

(d) for every unit $f\in D(M_{m}^{\mathfrak h})$ one has
$$\operatorname{Var}_{f}(M_{m}^{\mathfrak h}):=\|M_{m}^{\mathfrak h}f\|^{2}-\langle M_{m}^{\mathfrak h}f,f\rangle^{2}>0;$$
consequently no unit vector of $\mathfrak h$ has a sharp $m$-value.

The identifications of $\mathfrak h$ and of these multipliers with physical
transverse photons, momenta or energies are not asserted here; they are a
separate model assignment outside this lemma.

## Facts & Assumptions

**Given:** the Axioms of Countable Choice and of Choice, the constants $c,\hbar>0$, the transverse subspace $\mathfrak h=\operatorname{ran}M_{\Pi}$, the Borel sets $B\subseteq\mathbb R$, the functions $m\in\{\hbar k_{j},\hbar c|k|\}$ and the operators $M_{m}^{\mathfrak h}$.

[F1] **Full-space multiplier.** For a real measurable finite-valued $a:\mathbb R^{3}\to\mathbb R$ the componentwise multiplier $M_{a}u:=au$ on $D(M_{a})=\{u\in L^{2}(\mathbb R^{3};\mathbb C^{3}):au\in L^{2}\}$ is self-adjoint: the scalar statement is [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (a), applied to each of the three components of $u$.

[F2] **Spectral measure of a multiplier.** Let $(X,\Sigma,\mu)$ be $\sigma$-finite with $\mu(X)>0$, $m:X\to\mathbb R$ measurable and finite a.e., $H=L^{2}(X,\mu;\mathbb C)$ and $M_{m}$ as in [F1]. Then $E(B):=M_{\mathbf 1_{m^{-1}(B)}}$ is the spectral projection-valued measure of $M_{m}$, and for a unit vector $\psi\in H$ one has $\|E(B)\psi\|^{2}=\int_{m^{-1}(B)}|\psi|^{2}\,d\mu$ ([[lem-nrqm-observables-l2-multiplication-spectral-measure]] clauses (b), (c)).

[F3] **PVM integrals.** Let $E$ be a projection-valued measure on a Hilbert space $K$ and $f$ real-valued measurable. Then $f(E)=\int f\,dE$ is self-adjoint with domain $D(f(E))=\{x:\int f^{2}\,dE_{x}<\infty\}$, where $dE_{x}$ is the scalar measure of $E$ at $x$, and $\|f(E)x\|^{2}=\int f^{2}\,dE_{x}$; moreover bounded measurable functions with $|g_{n}|\le C|f|$ and $g_{n}\to f$ pointwise satisfy $g_{n}(E)x\to f(E)x$ for every $x\in D(f(E))$ ([[def-unbounded-integral-against-a-pvm]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).

[F4] **Hilbertian projections.** $\mathfrak h=\operatorname{ran}M_{\Pi}$ is a closed linear subspace of $L^{2}(\mathbb R^{3};\mathbb C^{3})$ with the restricted inner product, and $M_{\Pi}$ is the orthogonal projection onto it; multiplication operators by functions of $k$ commute with $M_{\Pi}$ ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F5] **Null level sets of the momentum components.** For $j\in\{1,2,3\}$ and $\lambda\in\mathbb R$ the set $\{k\in\mathbb R^{3}:\hbar k_{j}=\lambda\}$ is the graph of a constant, hence Lebesgue measurable, function over $\mathbb R^{2}$ and is Lebesgue null ([[cor-graph-of-a-measurable-function-is-lebesgue-null]]).

[F6] **Null spheres.** For $\lambda\in\mathbb R$ the set $\{k\in\mathbb R^{3}:\hbar c|k|=\lambda\}$ is empty when $\lambda<0$ and otherwise the sphere of radius $\lambda/(\hbar c)$, which is Lebesgue null: by the polar-coordinates formula $\int_{\mathbb R^{3}}g\,d\lambda_{3}=\int_{0}^{\infty}\int_{S^{2}}g(r\omega)r^{2}\,d\sigma(\omega)\,dr$ for Borel measurable $g\ge0$, applied to $g=\mathbf 1_{\{|k|=r_{0}\}}$ the inner integrand vanishes for every $r\ne r_{0}$, and $\{r_{0}\}$ is a countable, hence $\lambda_{1}$-null, subset of $(0,\infty)$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[prop-countable-subsets-of-rn-are-lebesgue-null]]).

## Proof

**Proof technique:** direct; restrict the full-space multiplier to the invariant closed subspace, identify the restricted spectral measure, and use the nullity of the level sets to exclude eigenvectors.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Restriction of the spectral measure] Let $m$ be one of the two displayed functions; both are real, measurable and finite-valued. By [F4] the multiplier $M_{m}$ commutes with $M_{\Pi}$, so $E(B)=M_{\mathbf 1_{m^{-1}(B)}}$ (componentwise) commutes with $M_{\Pi}$ for every Borel set $B$ and therefore maps $\mathfrak h$ into itself: for $f\in\mathfrak h$ one has $E(B)f=\mathbf 1_{m^{-1}(B)}f\in\mathfrak h$ because transversality holds pointwise. Thus $E_{\mathfrak h}(B):=E(B)|_{\mathfrak h}$ is a family of projections on $\mathfrak h$ with $E_{\mathfrak h}(B)^{2}=E_{\mathfrak h}(B)=E_{\mathfrak h}(B)^{*}$, $E_{\mathfrak h}(\varnothing)=0$, $E_{\mathfrak h}(\mathbb R)=\mathrm{id}_{\mathfrak h}$, and $\sigma$-additivity and strong convergence inherited from $E$; hence $E_{\mathfrak h}$ is a projection-valued measure on $\mathfrak h$. [F2, F4, algebra]

1.2 [No eigenvalues] Let $\lambda\in\mathbb R$ and let $f\in D(M_{m}^{\mathfrak h})$ satisfy $M_{m}^{\mathfrak h}f=\lambda f$, that is $m(k)f(k)=\lambda f(k)$ for almost every $k$. Then $f=0$ almost everywhere on $\{k:m(k)\ne\lambda\}$, so $f$ is supported in $N_{\lambda}:=\{k:m(k)=\lambda\}$ up to a null set. For $m=\hbar k_{j}$ the set $N_{\lambda}$ is null by [F5]; for $m=\hbar c|k|$ it is null by [F6]. In both cases $f=0$ almost everywhere, hence $f=0$ in $L^{2}$. This proves (c). [F5, F6, algebra]

2.1 [The restricted integral is the restricted multiplier] By [F3] applied to $E_{\mathfrak h}$ and the real function $\lambda\mapsto\lambda$ the operator $A:=\int\lambda\,dE_{\mathfrak h}(\lambda)$ is self-adjoint with domain $\{f\in\mathfrak h:\int\lambda^{2}\,dE_{\mathfrak h,f}(\lambda)<\infty\}$. For every $g\in\mathfrak h$ and Borel $B$ we have $\langle E_{\mathfrak h}(B)g,g\rangle=\int_{m^{-1}(B)}\|g(k)\|^{2}\,d^{3}k$: the scalar statements of [F2] applied to the three components of $g$ combine by sesquilinearity, and the unit case extends by scaling in $g$, so the scalar measure $E_{\mathfrak h,g}$ is the push-forward of $\|g\|^{2}\,d^{3}k$ under $k\mapsto m(k)$; hence $\int\lambda^{2}\,dE_{\mathfrak h,f}(\lambda)=\int m(k)^{2}\|f(k)\|^{2}\,d^{3}k$ by the change-of-variables formula for a push-forward measure against the Borel function $\lambda\mapsto\lambda^{2}$, the two sides agreeing on indicators of Borel sets and extending by linearity and monotone convergence. Therefore $D(A)=\{f\in\mathfrak h:\int m^{2}\|f\|^{2}\,d^{3}k<\infty\}=D(M_{m}^{\mathfrak h})$. [F2, F3, F4, step 1.1, algebra]

3.1 [Identification on the domain] Let $f\in D(A)$ and put $m_{n}:=m\mathbf 1_{\{|m|\le n\}}$ for $n\ge1$; then $|m_{n}|\le|m|$ and $m_{n}\to m$ pointwise, so [F3] gives $m_{n}(E_{\mathfrak h})f\to Af$. For $g\in\mathfrak h$ the bounded operator $m_{n}(E_{\mathfrak h})$ satisfies $\langle m_{n}(E_{\mathfrak h})g,g\rangle=\int m_{n}\,dE_{\mathfrak h,g}=\int m_{n}(k)\|g(k)\|^{2}\,d^{3}k=\langle m_{n}g,g\rangle$ by the push-forward description of step 2.1; both operators are bounded and self-adjoint and their quadratic forms agree, so $m_{n}(E_{\mathfrak h})=M_{m_{n}}|_{\mathfrak h}$: the bounded functional calculus of the restricted multiplier is multiplication by $m_{n}$. The convergence $m_{n}f\to mf$ in $L^{2}(\mathbb R^{3};\mathbb C^{3})$ holds by dominated convergence, since $\|m_{n}f-mf\|^{2}\le4m^{2}\|f\|^{2}$ is integrable under $f\in D(A)$; its limit $mf$ lies in $\mathfrak h$ because transversality is preserved pointwise, and lies in $D(A)$ because $\int m^{2}\|f\|^{2}<\infty$. Hence $Af=mf=M_{m}^{\mathfrak h}f$ for every $f\in D(A)$; conversely if $f\in D(M_{m}^{\mathfrak h})$ then $\int m^{2}\|f\|^{2}=\|mf\|^{2}<\infty$, so $f\in D(A)$. Therefore $A=M_{m}^{\mathfrak h}$ with the displayed domain, and (a) and (b) follow. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 [Positive variance] Let $f\in\mathfrak h$ be a unit vector in $D(M_{m}^{\mathfrak h})$ and put $\mu:=\langle M_{m}^{\mathfrak h}f,f\rangle$, a real number because $M_{m}^{\mathfrak h}$ is self-adjoint. Then $$\|M_{m}^{\mathfrak h}f\|^{2}-\langle M_{m}^{\mathfrak h}f,f\rangle^{2}=\|(M_{m}^{\mathfrak h}-\mu I)f\|^{2}\ge0,$$ and equality holds exactly when $(M_{m}^{\mathfrak h}-\mu I)f=0$, that is when $f$ is an eigenvector of $M_{m}^{\mathfrak h}$ with eigenvalue $\mu$. By step 1.2 no nonzero eigenvector exists, so the left-hand side is strictly positive. This proves (d) and completes the proof. [step 1.2, algebra] ∎

## Remarks

- **Choice hypotheses.** Both cited suppliers (the multiplication spectral
  measure and the PVM-integral lemma) are stated with the Axioms of Countable
  and Dependent Choice; the Axiom of Choice enters only through those citations
  and is carried explicitly. The nullity computations use Countable Choice.
- **What fails for sharp modes.** Step 1.2 says that the sharp-mode idealisation
  of the radiation model is not a state vector of the sector: a normalisable
  one-photon vector never has an exact frequency or an exact momentum component.
  The plane-wave labels $k$ are parameters of the spectral representation, not
  normalisable states.
