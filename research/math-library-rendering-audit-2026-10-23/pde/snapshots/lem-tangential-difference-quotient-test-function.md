---
id: lem-tangential-difference-quotient-test-function
kind: lemma
title: "The difference-quotient test function and its commutators"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-first-difference-quotient, lem-difference-quotient-integration-by-parts, lem-cutoff-difference-quotient-commutator-estimate, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, lem-compact-support-zero-extension-in-wkp, def-wkp-zero-as-a-sobolev-closure, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, lem-elliptic-form-is-well-defined-and-bounded, lem-weak-leibniz-rule-with-a-smooth-factor, cor-c-one-change-of-variables-for-l-one-functions, def-countable-choice, thm-young-inequality-real-exponents, thm-holder-inequality-for-integrals]
landmark: false
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, (4.40)-(4.42), and Section 4.12, proof of Theorem 4.30, printed pp. 112-115 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, proof of Lemma 10.18 (tangential test functions), printed p. 242 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 9, proof of Theorem 1 (flat boundary and tangential quotients), printed pp. 88-90 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$.
(i) Let $u\in H^1(\Omega)$, $\eta\in C_c^\infty(\Omega;\mathbb R)$ and
$i\in\{1,\dots,n\}$. For every $0<|h|<\operatorname{dist}(\operatorname{supp}\eta,\partial\Omega)$
the class $v:=-\delta_{-h}^i\big(\eta^2\,\delta_h^iu\big)$
([[def-first-difference-quotient]]) is defined, has compact support in
$\Omega$, lies in $H^1(\Omega)$ and therefore in $H^1_0(\Omega)$
([[lem-compact-support-zero-extension-in-wkp]],
[[def-wkp-zero-as-a-sobolev-closure]]). It is an admissible test class in the
weak equation of [[def-local-weak-solution-for-a-divergence-form-operator]].
(ii) Let $H=\{x_n>0\}$ be the upper half-space,
$u\in H^1_0(H;\mathbb K)$ with $\operatorname{supp}u\subseteq B_1(0)\cap\overline H$,
$j<n$ a tangential index, and $\eta\in C_c^\infty(\mathbb R^n;\mathbb R)$. Then for every fixed small $h\ne0$ the tangential class
$v:=-\delta_{-h}^j\big(\eta^2\,\delta_h^ju\big)$, read on $H$, lies in
$H^1_0(H)$: for each fixed $h$ the maps $w\mapsto\eta^2w$ and
$w\mapsto\delta_{\pm h}^jw$ are bounded on $H^1(H)$ and carry
$C_c^\infty(H)$ into itself, so they preserve the closure that defines
$H^1_0(H)$ ([[def-wkp-zero-as-a-sobolev-closure]]). In particular $v$ is admissible in a weak half-space problem whose datum defines a bounded functional on $H^1_0(H)$, including a datum in $L^2(H)$.
(iii) Fix the quotient direction $k$ (independent of the summed form indices $i,j$), put $w=\eta^2\delta_h^ku$ and $v=-\delta_{-h}^kw$. The principal pairing equals
$$\int\eta^2a^{ij}(x+he_k)\delta_h^kD_ju\overline{\delta_h^kD_iu}+R_{a,h},$$
where, writing $u_+=u(x+he_k)$ and using weak derivatives,
$$R_{a,h}=\int\eta^2(\delta_h^ka^{ij})D_ju\overline{\delta_h^kD_iu}+\int\left(a^{ij}(x+he_k)\delta_h^kD_ju+(\delta_h^ka^{ij})D_ju\right)\overline{D_i(\eta^2)\delta_h^ku}.$$
The full form adds the undifferentiated lower-order pairing $\int(b^iD_iu+cu)\overline v$. All these integrals are finite for each fixed admissible $h$, since bounded coefficient quotients have magnitude at most $2M_a/|h|$. If the principal coefficients have bounded first weak derivatives on the quotient neighbourhood, the principal remainder admits the usual Young bounds uniform in small $h$. No derivative or uniformly bounded difference quotient of $b,c$ is asserted or needed. The integrals are over the supported interior patch in case (i), and over $H$ in case (ii).

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with $n\ge1$; a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; for (i) a class $u\in H^1(\Omega)$ and $\eta\in C_c^\infty(\Omega;\mathbb R)$ with $0<|h|<\operatorname{dist}(\operatorname{supp}\eta,\partial\Omega)$; for (ii) the upper half-space $H=\{x_n>0\}$, a class $u\in H^1_0(H)$ supported in $B_1(0)\cap\overline H$, a tangential index $j<n$, $\eta\in C_c^\infty(\mathbb R^n;\mathbb R)$, and a fixed small $h\ne0$; and the coefficients and form of [[def-uniformly-elliptic-divergence-form-operator]] with bounds $M_a,M_b,M_c$.

[F1] Difference-quotient calculus: on shrunken domains $\delta_h^iw=(w(\cdot+he_i)-w)/h$; the product rule $\delta_h^i(wz)=(\tau_{-he_i}w)\delta_h^iz+(\delta_h^iw)z$ holds for locally integrable factors with locally integrable product; weak derivatives commute with difference quotients, $D_k(\delta_h^iw)=\delta_h^i(D_kw)$ whenever both sides are defined; and if $f$ is compactly supported with $|h|<\operatorname{dist}(\operatorname{supp}f,\partial\Omega)$ then $\int_\Omega f\,\overline{\delta_{-h}^ig}\,dx=-\int_\Omega\delta_h^if\,\overline g\,dx$ for every $g$ for which the integrals converge. ([[lem-difference-quotient-integration-by-parts]], [[def-first-difference-quotient]])

[F2] Smooth-factor Leibniz rule: for $\eta\in C_c^\infty(\Omega;\mathbb R)$ and $w\in H^1(\Omega)$, $\eta^2w\in H^1(\Omega)$ with $D_k(\eta^2w)=\eta^2D_kw+D_k(\eta^2)w$ almost everywhere; more generally a product of a smooth compactly supported factor and an $H^1$ class is $H^1$. ([[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-cutoff-difference-quotient-commutator-estimate]])

[F3] Compact support and zero boundary: a class in $W^{1,2}$ of an open set whose support is a compact subset of that set extends by zero to $W^{1,2}(\mathbb R^n)$ with norm-preserving derivative extensions, and a compactly supported class in $H^1(U)$ lies in $H^1_0(U)$; a compactly supported test class is therefore admissible in the local weak equation on a bounded inner open set containing its support. Testing against every $H^1_0(\Omega)$ class requires a datum defining a bounded functional there, as holds for $f\in L^2(\Omega)$. ([[lem-compact-support-zero-extension-in-wkp]], [[lem-cutoff-difference-quotient-commutator-estimate]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-local-weak-solution-for-a-divergence-form-operator]])

[F4] For fixed $h\ne0$ the tangential quotient is bounded on $H^1(H)$: for $w\in H^1(H)$ one has $D_k(\delta_h^jw)=\delta_h^j(D_kw)$ and $\|\delta_h^jw\|_{L^2}\le2\|w\|_{L^2}/|h|$, with the same bound for $\delta_{-h}^j$; tangential shifts preserve $H$ and map $C_c^\infty(H)$ into itself. ([[def-first-difference-quotient]], the explicitly defined half-space $H=\{x_n>0\}$, [[cor-c-one-change-of-variables-for-l-one-functions]])

[F6] The form is bounded on $H^1$: $|a(w,z)|\le(nM_a+nM_b+M_c)\|w\|_{H^1}\|z\|_{H^1}$, so every pairing with $H^1$ arguments is absolutely convergent, and $a$ is linear in the first and conjugate-linear in the second slot. ([[lem-elliptic-form-is-well-defined-and-bounded]], [[def-uniformly-elliptic-divergence-form-operator]])



## Proof

**Proof technique:** direct.

1.1 In the setting of (i) write $w:=\eta^2\delta_h^iu$ on $\Omega_{i,h}$. The class $\delta_h^iu$ lies in $H^1(\Omega_{i,h})$ with $D_k(\delta_h^iu)=\delta_h^i(D_ku)$ by [F1], so [F2] gives $w\in H^1(\Omega_{i,h})$ with $$D_kw=\eta^2\,\delta_h^i(D_ku)+D_k(\eta^2)\,\delta_h^iu .$$ Since $|h|<\operatorname{dist}(\operatorname{supp}\eta,\partial\Omega)$, the compact set $\operatorname{supp}\eta$ lies in the interior of $\Omega_{i,h}$, so $w$ is supported in a compact subset of $\Omega_{i,h}$ and its zero extension lies in $H^1(\Omega)$ with the same weak gradient; then form $v=-\delta_{-h}^iw$ using the whole-space zero extension of $w$. Its support lies in $\operatorname{supp}\eta\cup(\operatorname{supp}\eta+he_i)\Subset\Omega$, so its restriction lies in $H^1(\Omega)$ by [F1], and hence $v\in H^1_0(\Omega)$ by [F3]. [F1, F2, F3, given]

1.2 In the setting of (ii), for fixed $h\ne0$ consider the operations $T_1w:=\eta^2w$ and $T_2w:=\delta_h^jw$, $T_3w:=\delta_{-h}^jw$ on $H^1(H)$. Each is bounded: $T_1$ by [F2] with the fixed smooth factor $\eta$ and $T_2,T_3$ by [F4], and each carries $C_c^\infty(H)$ into itself, since multiplication by a smooth compactly supported factor and tangential shifts preserve smoothness and compact support in $H$. If $\varphi_k\in C_c^\infty(H)$ approximate $u$ in $H^1(H)$, then $v_k:=-T_3T_1T_2\varphi_k\in C_c^\infty(H)$ and $v_k\to v$ in $H^1(H)$ by the boundedness, so $v\in H^1_0(H)$ by the definition of the closure; under the bounded-datum-functional hypothesis of (ii), [F3] makes $v$ an admissible test class. [F2, F3, F4, given]

2.1 Principal pairing. Fix a quotient direction $k$ and write $w=\eta^2\delta_h^ku$, $v=-\delta_{-h}^kw$. Difference quotients commute with weak derivatives, and discrete integration by parts, applied to the compactly supported test factor in the interior case or by tangential translation on $H$, gives $\int a^{ij}D_ju\overline{D_iv}=\int\delta_h^k(a^{ij}D_ju)\overline{D_iw}$. The quotient direction $k$ is fixed throughout and the form indices $i,j$ are summed independently. [F1, step 1.1, step 1.2]

3.1 Product expansion. Insert $D_iw=\eta^2\delta_h^kD_iu+D_i(\eta^2)\delta_h^ku$ and $\delta_h^k(a^{ij}D_ju)=a^{ij}(x+he_k)\delta_h^kD_ju+(\delta_h^ka^{ij})D_ju$. Multiplication produces precisely the displayed shifted principal term and the three remainder terms in the Statement. This algebra uses the correct shifted product rule. [F1, F2, step 2.1, algebra]

4.1 Bounds and lower-order terms. For fixed $h$, the coefficient quotient is bounded by $2M_a/|h|$ and all translated first derivatives and quotient classes are $L^2$ on the supported patches, so Cauchy--Schwarz makes every displayed remainder finite. If $a\in W^{1,\infty}$ there, its quotient is uniformly bounded by the corresponding weak gradient bound. Young's inequality then bounds each principal remainder by $\varepsilon\|\eta\delta_h^kDu\|_2^2+C_\varepsilon\|Du\|_2^2$, with norms on a slightly enlarged patch in the interior case. The drift and reaction pairings are simply $\int(b^iD_iu+cu)\overline v$ and are finite by boundedness of $b,c$ and $v\in H^1$; they can be estimated directly without taking coefficient quotients. [F1, F2, F6, step 3.1, algebra]

5.1 Conclusion. Steps 1.1 and 1.2 establish the admissible test classes. Steps 2.1--3.1 establish the exact principal decomposition and finite full form pairing, distinguishing the principal commutators from the undifferentiated lower-order terms. [F6, step 1.1, step 1.2, step 3.1, step 4.1] ∎


## Source notes

Hunter (4.40)-(4.42) and the proof of Theorem 4.30 (printed pp. 112-115), Teschl's Lemma 10.18 (printed p. 242) and Simon's Lecture 9, Theorem 1 (printed pp. 88-90) all test the weak equation with a tangential second-difference expression of the form $-\delta_{-h}(\eta^2\delta_hu)$ and then absorb the commutators. The scaffold said the operations in (ii) are bounded on $H^1(H)$ "uniformly in $|h|\le1$"; for the closure argument only the boundedness at each fixed $h$ is needed and true, since $\|\delta_h^jw\|_{L^2}\le2\|w\|_{L^2}/|h|$, and the statement above records that repaired form. The exact principal remainder uses $\delta_h^ka^{ij}$; drift and reaction terms are left undifferentiated, so their mere boundedness suffices in the consuming estimates.
