---
id: lem-cg-positive-radical-and-affine-gram-exclusions
kind: lemma
title: "Positive radical, corank one, positive definiteness of proper submatrices, and domination exclusions"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [def-cg-irreducible-affine-coxeter-type, def-hh-coxeter-matrix-word-group-and-length, def-generated-subgroup, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-cg-real-coxeter-form-and-reflection, def-cg-coxeter-diagram-components-and-finite-type, thm-cg-finite-type-positive-definite-criterion, def-definiteness-inertia-and-signature-data-over-the-reals, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-linear-basis, def-linear-combination-and-span, def-linear-subspace, def-dimension, thm-sylvesters-criterion-for-positive-definiteness, def-determinant-of-a-square-matrix, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, Princeton University Press, 2008; 600 PDF pages)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.3, Lemma 6.3.5 (the $|c_i|$ argument), Definition 6.3.6 and Lemma 6.3.7 with proof (positive kernel vector and corank one), printed pp. 79-80; Section 6.8, Remark 6.8.9(ii) (proper principal submatrices), printed p. 101; Appendix C.3 (definition of domination and Lemma C.3.1 with proof), printed pp. 436-437"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set with Coxeter matrix $m$, let $W$ be the presented group ([[def-hh-coxeter-matrix-word-group-and-length]]), let $\Gamma$ be its diagram ([[def-cg-coxeter-diagram-components-and-finite-type]]), and let $V=\mathbb R^S$ carry the Coxeter form $B$ ([[def-cg-real-coxeter-form-and-reflection]]). Assume that $\Gamma$ is connected, that $B(e_s,e_t)\le0$ for distinct $s,t$, and that $B$ is positive semidefinite ([[def-definiteness-inertia-and-signature-data-over-the-reals]]) with $\operatorname{rad}(B)\ne\{0\}$. These are the raw hypotheses; no corank-one condition is assumed.

**(1) Positive radical and corank one.** If $x=\sum_{s}x_se_s\in\operatorname{rad}(B)$ and $x\ne0$, then $x_s\ne0$ for every $s\in S$. The set of $x\in\operatorname{rad}(B)$ with $x_s>0$ for all $s$ is nonempty and consists of the positive multiples of one vector $\delta$; in particular $\dim\operatorname{rad}(B)=1$ and $\operatorname{rad}(B)=\mathbb R\delta$. [No Perron-Frobenius theorem is used.]

**(2) Proper principal submatrices and parabolics.** For every proper subset $T\subsetneq S$, the principal submatrix $(B(e_s,e_t))_{s,t\in T}$ is positive definite, with the $T=\emptyset$ case vacuous. For nonempty $T$, the standard parabolic $W_T:=\langle s:s\in T\rangle$ ([[def-hh-coxeter-matrix-word-group-and-length]]) has the Coxeter presentation with restricted matrix $m|_{T\times T}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)); its Coxeter form is the displayed principal submatrix, so $W_T$ is finite by [[thm-cg-finite-type-positive-definite-criterion]] (1). For $T=\emptyset$, $W_T=\{1\}$ is finite by definition.

**(3) Domination.** Let $T\subseteq S$ and let $\Gamma'$ be a Coxeter diagram on $T$, with edge labels in $\{3,4,\dots\}\cup\{\infty\}$, whose underlying graph is a subgraph of the induced subdiagram $\Gamma_T$ and whose retained edge labels are no larger than the corresponding labels of $\Gamma_T$. For a nonedge use label $2$; put $m'(s,s)=1$, and let $B_{\Gamma'}$ be the symmetric form on $\mathbb R^T$ with $B_{\Gamma'}(e_s,e_s)=1$, $B_{\Gamma'}(e_s,e_t)=-\cos(\pi/m'(s,t))$ for finite $m'(s,t)$, and $B_{\Gamma'}(e_s,e_t)=-1$ when $m'(s,t)=\infty$. Thus nonedges have entry $0$. If $\Gamma'\ne\Gamma_T$ (a strict instance of the usual label/subgraph domination relation), then its cosine matrix is positive definite. Here the relation is applied to $\Gamma_T$ even when it is disconnected; when $T=S$, it is the relation of [Davis, Appendix C.3]. Consequently, if the cosine matrix of some such $\Gamma'$ is not positive definite - for instance if it has a nonzero vector $v$ with $B_{\Gamma'}(v,v)\le0$, or, when $T\ne\emptyset$, if its determinant is $\le0$ while some proper principal submatrix is positive definite ([[thm-sylvesters-criterion-for-positive-definiteness]], [[def-determinant-of-a-square-matrix]]) - then $\Gamma_T$ cannot strictly dominate $\Gamma'$.

**(4) Use.** Clauses (1)-(3) supply the positive-radical structure and domination exclusion used to enumerate connected diagrams of the affine form type defined in [[def-cg-irreducible-affine-coxeter-type]] (1). This reference supplies terminology only: the hypotheses above are raw and the proof does not assume corank one.

## Facts & Assumptions

**Given:** A finite set $S$ with Coxeter matrix $m$, presented group $W$, diagram $\Gamma$ (connected) and the form $B$ on $V=\mathbb R^S$, with $B(e_s,e_s)=1$, $B(e_s,e_t)\le0$ for $s\ne t$ and $B(e_s,e_t)=-1$ exactly when $m(s,t)=\infty$; $B$ is positive semidefinite, $B(v,v)\ge0$ for all $v$, and $\operatorname{rad}(B)\ne\{0\}$.

[F1] $B$ is symmetric and bilinear, with $B(e_s,e_s)=1$, the stated cosine entries, and the given inequalities $B(e_s,e_t)\le0$ for $s\ne t$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-bilinear-symmetric-skew-and-alternating-forms]]). The coordinate functions $e_s$ form a basis of $V=\mathbb R^S$: each $u$ is $\sum_su(s)e_s$, and evaluation at each index gives uniqueness.

[F2] The radical $\operatorname{rad}(B)=\{v:B(v,w)=0\text{ for all }w\in V\}$ is closed under linear combinations by bilinearity, hence is a linear subspace; $B$ vanishes on $\operatorname{rad}(B)\times V$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]], [[def-linear-subspace]]).

[F3] By the hypothesis of positive semidefiniteness, $B(v,v)\ge0$ for every $v$; positive definiteness means $B(v,v)>0$ for every $v\ne0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F4] Two vertices $s\ne t$ of $\Gamma$ are adjacent exactly when $m(s,t)\ge3$ ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F5] For a real symmetric $n\times n$ matrix with $n\ge1$, positive definiteness is equivalent to positivity of all leading principal minors; in particular, a nonpositive determinant rules out positive definiteness ([[thm-sylvesters-criterion-for-positive-definiteness]], [[def-determinant-of-a-square-matrix]]).

[F7] Cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F8] The singleton $\{\delta\}$ is a basis of the line $\mathbb R\delta$, so that this line has dimension $1$ ([[def-linear-basis]], [[def-linear-combination-and-span]], [[def-dimension]]).

[F9] The standard parabolic is $W_T=\langle s:s\in T\rangle$ ([[def-hh-coxeter-matrix-word-group-and-length]]); $\langle\emptyset\rangle=\{1\}$ ([[def-generated-subgroup]]); and the group presented by the restricted matrix maps isomorphically to $W_T$, making $(W_T,T)$ a Coxeter system ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)).

[F10] For a Coxeter system, its group is finite if and only if its Coxeter form is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1)).

[F11] Connectedness of $\Gamma$ means its underlying graph is connected ([[def-cg-coxeter-diagram-components-and-finite-type]]).

[F12] $\cos(\pi/2)=0$ ([[thm-quarter-turn-values-and-shift-formulas]]).

## Proof

**Proof technique:** direct; the $|x|$ trick replaces Perron-Frobenius, and the domination clause is the equality case of a three-term comparison. All sums and choices are finite; no choice principle is used.

1.1 (The absolute-value inequality.) For $x=\sum_sx_se_s\in V$ put $q(x):=B(x,x)$ and $y:=\sum_s|x_s|e_s$. Expanding in the basis $(e_s)$, $q(x)-q(y)=2\sum_{\{s,t\}\in\binom{S}{2}}B(e_s,e_t)\bigl(x_sx_t-|x_s||x_t|\bigr)$, where the sum runs over unordered pairs of distinct indices. Each summand is $\ge0$ because $B(e_s,e_t)\le0$ and $x_sx_t\le|x_sx_t|=|x_s||x_t|$; hence $q(y)\le q(x)$ [F1]. [F1, algebra]

1.2 (The radical of a positive semidefinite form.) If $q(v)=0$ then $v\in\operatorname{rad}(B)$: for every $w\in V$ and every $t\in\mathbb R$ one has $0\le q(v+tw)=2tB(v,w)+t^2q(w)$. If $q(w)>0$ then choosing $t=-B(v,w)/q(w)$ gives $-B(v,w)^2/q(w)\ge0$, so $B(v,w)=0$; if $q(w)=0$ then $2tB(v,w)\ge0$ for every $t$, so again $B(v,w)=0$. [F2, F3, F1, algebra]

1.3 (Propagation of zeros along the diagram.) Let $y=\sum_sy_se_s\in\operatorname{rad}(B)$ with $y_s\ge0$ for all $s$, and suppose $y_i=0$ for some $i\in S$. Since $B$ is symmetric and $y$ is radical, $0=B(e_i,y)=\sum_{t}B(e_i,e_t)y_t$ [F1, F2]. Each summand is $\le0$: this follows from $y_t\ge0$ and $B(e_i,e_t)\le0$ for $t\ne i$, while the $t=i$ term is $1\cdot0=0$ [F1]. Hence every summand is $0$; in particular $y_j=0$ for every neighbour $j$ of $i$, because neighbours have $B(e_i,e_j)<0$ by [F1, F4, F7, F12]. Iterating along the connected diagram $\Gamma$ [F11] gives $y_t=0$ for all $t\in S$. [F1, F2, F4, F7, F11, F12, algebra]

2.1 (Full support of nonzero radical vectors.) Let $x=\sum_sx_se_s\in\operatorname{rad}(B)$, $x\ne0$, and put $y:=\sum_s|x_s|e_s$. By step 1.1, $q(y)\le q(x)=0$, and by positive semidefiniteness $q(y)\ge0$, so $q(y)=0$ [F3]; by step 1.2, $y\in\operatorname{rad}(B)$, and $y\ne0$ because $x\ne0$. If some $x_i$ were $0$, then $y_i=0$ and step 1.3 would give $y=0$, a contradiction. Hence $x_s\ne0$ for every $s\in S$. [F3, step 1.1, step 1.2, step 1.3, algebra]

3.1 (Existence, uniqueness and full span of the positive radical vector.) Replacing any nonzero $x\in\operatorname{rad}(B)$ by $y=\sum_s|x_s|e_s$ gives a nonzero radical vector with nonnegative coordinates; step 1.3 shows every coordinate is positive. Thus the positive radical set is nonempty. If $x,x'$ both belong to it and were linearly independent, let $t_*:=\min_s x_s/x'_s>0$ and $w:=x-t_*x'$. Bilinearity shows $w\in\operatorname{rad}(B)$; some coordinate of $w$ is $0$, and $w\ne0$, contradicting step 2.1. Hence any two positive radical vectors are positive scalar multiples. Fix one such vector $\delta$. For an arbitrary $z=\sum_s z_se_s\in\operatorname{rad}(B)$, if some $z_s<0$ put $M:=\sum_{z_s<0}(-z_s/\delta_s)>0$ and $\varepsilon:=1/(2M)$; otherwise put $\varepsilon:=1$. In either case every coordinate of $\delta+\varepsilon z$ is positive. Bilinearity puts this vector in $\operatorname{rad}(B)$, so the uniqueness just proved gives $\delta+\varepsilon z=t\delta$ for some $t>0$. Therefore $z=((t-1)/\varepsilon)\delta$. This proves $\operatorname{rad}(B)=\mathbb R\delta$ and $\dim\operatorname{rad}(B)=1$ by [F8]. [F1, F2, step 2.1, step 1.3, algebra]

3.2 (Proper principal submatrices are positive definite.) Let $T\subsetneq S$ and let $u\in\mathbb R^T$ be nonzero. Pad its coordinates by zero to obtain $\tilde u\in V$. Since $B$ is positive semidefinite, $B(\tilde u,\tilde u)\ge0$. If equality held, step 1.2 would put $\tilde u$ in $\operatorname{rad}(B)$; it is nonzero and has a zero coordinate outside $T$, contradicting step 2.1. Hence $B(\tilde u,\tilde u)>0$ for every nonzero $u$, exactly positive definiteness of the principal submatrix. If $T=\emptyset$, this condition is vacuous and the zero-dimensional form is positive definite by definition. [F1, F3, step 1.2, step 2.1, algebra]

3.3 (Domination.) Let $\Gamma'$, $T$ and $B_{\Gamma'}$ be as in (3), and write $A'$ for its cosine matrix. Let $A$ be the matrix of $B$; after reordering the vertices so that $T$ comes first, $A'$ is indexed by the same first $|T|$ vertices. For an edge of $\Gamma'$ with label $m'\le m$, the entry is $-\cos(\pi/m')\ge-\cos(\pi/m)$ by [F7]; if the labels differ, the inequality is strict, including the convention $\pi/\infty=0$. For a pair not joined in $\Gamma'$, its entry is $0\ge A_{st}$. Thus $A_{st}\le A'_{st}\le0$ for all distinct $s,t\in T$, while both diagonals are $1$ [F1, F4]. Suppose $A'$ is not positive definite. By [F3], some nonzero $x\in\mathbb R^T$ satisfies $x^{\mathsf T}A'x\le0$. Pad $z:=(|x_s|)_{s\in T}$ by zero outside $T$. Then $0\le z^{\mathsf T}Az\le\sum_{s,t\in T}A'_{st}|x_s||x_t|\le x^{\mathsf T}A'x\le0$. The first inequality is positive semidefiniteness; the second follows termwise from $A_{st}\le A'_{st}$ and nonnegative coordinate products; the third follows termwise because $A'_{st}\le0$ off the diagonal and $x_sx_t\le|x_s||x_t|$. Equality throughout gives $B(z,z)=0$, so $z\in\operatorname{rad}(B)$ by step 1.2. Since $z\ne0$, step 2.1 forces every coordinate of $z$ to be nonzero, hence $T=S$ and every $x_s\ne0$. Equality in the second inequality then forces $A_{st}=A'_{st}$ for every distinct pair, so the strict monotonicity in [F7] gives the same edges and labels: $\Gamma'=\Gamma_T$, contrary to the hypothesis. Therefore $A'$ is positive definite. [F1, F2, F3, F4, F7, step 1.2, step 2.1, algebra]

4.1 (The proper standard parabolics are finite.) Let $T\subsetneq S$. If $T\ne\emptyset$, step 3.2 makes its restricted Coxeter form positive definite, and [F9] identifies $(W_T,T)$ as a Coxeter system with that restricted form; [F10] then gives that $W_T$ is finite. If $T=\emptyset$, [F9] gives $W_T=\{1\}$, also finite. [F1, F9, F10, step 3.2, algebra]

5.1 (The exclusion consequence.) If $A'$ has a nonzero vector $v$ with $B_{\Gamma'}(v,v)\le0$, then it is not positive definite by definition [F3]. If $T\ne\emptyset$ and $\det A'\le0$, then its last leading principal minor is nonpositive, so $A'$ is not positive definite by Sylvester's criterion [F5]; this also covers the statement's example that additionally assumes a proper principal submatrix is positive definite. By step 3.3, neither obstruction is compatible with strict domination. [F3, F5, step 3.3, algebra] ∎
