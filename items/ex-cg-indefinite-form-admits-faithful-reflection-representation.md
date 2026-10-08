---
id: ex-cg-indefinite-form-admits-faithful-reflection-representation
kind: example
title: "An indefinite Coxeter form with a faithful canonical reflection representation"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [thm-cg-root-length-criterion-and-faithfulness, thm-cg-root-sign-and-simple-reflection-positivity, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-hh-coxeter-matrix-word-group-and-length, lem-hh-dihedral-root-recurrence-and-root-sign, def-definiteness-inertia-and-signature-data-over-the-reals, def-linear-basis, def-free-product-of-a-family-of-groups, def-eigenvalue-eigenvector-eigenspace-and-spectrum]
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press, 2008; author's complete institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 439-442 (Theorem D.1.1, Corollary D.1.2, Lemma D.1.5); read in the extracted full text; figures and exercises excluded"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted full PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "S4.2, printed pp. 93-97 (Propositions 4.2.1 and 4.2.5, Theorem 4.2.7); S4.4, printed pp. 101-105 (Definition 4.4.1, Lemma 4.4.3, Proposition 4.4.4); read in the extracted full text; exercises excluded"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s,t,r\}$ and let $m$ be the Coxeter matrix with $m(u,u)=1$ and $m(u,v)=\infty$ for all distinct $u,v\in S$, so that the presentation has only the involutions $s^2=t^2=r^2=1$ and $W$ is the free product of three copies of $\mathbb Z/2$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-free-product-of-a-family-of-groups]]). Let $V=\mathbb R^S$, $B$ the Coxeter form and $\rho:W\to\mathrm{GL}(V)$ the canonical reflection homomorphism ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]). Then:

(i) in the basis $(e_s,e_t,e_r)$ one has
$$[B]=\begin{pmatrix}1&-1&-1\\-1&1&-1\\-1&-1&1\end{pmatrix}=2I-J,\qquad J=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix},$$
with eigenvalues $2,2,-1$; hence $B$ is indefinite and nondegenerate with inertia $(2,1,0)$ and scalar signature $2-1=1$ in the convention of [[def-definiteness-inertia-and-signature-data-over-the-reals]]. The positive/negative index pair is $(2,1)$, also called the signature in the pair convention used by the companion page; $V_+$ is a proper cone;

(ii) nevertheless $\rho$ is faithful ([[thm-cg-root-length-criterion-and-faithfulness]] (3)), and its behaviour is governed by the sign criterion: $\rho(s)e_t=e_t+2e_s\in\Phi_+$, $\rho(st)e_t=-e_t-2e_s\in\Phi_-$ (consistent with $\ell(stt)=\ell(s)=1<2=\ell(st)$), $\rho(st)e_s=3e_s+2e_t\in\Phi_+$ (consistent with $\ell(sts)=3>2=\ell(st)$), and $\rho(str)e_s=15e_s+6e_t+2e_r\ne e_s$, so $\rho(str)\ne1$;

(iii) the degenerate rank-two case behaves the same way: for $S'=\{s,t\}$ with $m(s,t)=\infty$ one has $[B]=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, positive semidefinite of rank one with radical $\mathbb R(e_s+e_t)$, and $\rho$ is still faithful, so neither indefiniteness nor degeneracy of $B$ obstructs faithfulness; what fails in the degenerate case is only the identification of $V$ with $V^*$ through $B$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)(ii)).

## Facts & Assumptions

**Given:** the three-element set $S=\{s,t,r\}$ with $m(u,u)=1$ and $m(u,v)=\infty$ for distinct $u,v$, the space $V=\mathbb R^S$ with basis $(e_s,e_t,e_r)$, the Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi=\Phi_+\sqcup\Phi_-$, the positive cone $V_+$, and the rank-two subspace $P=\mathbb Re_s+\mathbb Re_t$.

[F1] Here $c(u,v)=1$ for all distinct $u,v$, so $B(e_u,e_u)=1$ and $B(e_u,e_v)=-1$ for $u\ne v$; the reflection is $r_a(v)=v-2B(v,a)a$ for $B(a,a)=1$, giving $\rho(s)e_t=e_t+2e_s$, $\rho(s)e_r=e_r+2e_s$, $\rho(t)e_s=e_s+2e_t$, $\rho(t)e_r=e_r+2e_t$, $\rho(s)e_s=-e_s$ and $\rho(r)e_s=e_s+2e_r$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]]).

[F2] $W$ is presented by $(S,m)$, with universal property and length $\ell$; the alternating words $s\,t\,s\cdots$ of every length are reduced because $m(s,t)=\infty$, so $\ell(s)=1$, $\ell(st)=2$ and $\ell(sts)=3$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[lem-hh-dihedral-root-recurrence-and-root-sign]]).

[F3] Root sign and length criterion: $\Phi=\Phi_+\sqcup\Phi_-$, $\Phi_-=-\Phi_+$, and for all $w\in W$, $s\in S$ one has $\ell(ws)>\ell(w)\iff\rho(w)e_s\in\Phi_+$ and $\ell(ws)<\ell(w)\iff\rho(w)e_s\in\Phi_-$; moreover $\rho$ is injective ([[thm-cg-root-sign-and-simple-reflection-positivity]], [[thm-cg-root-length-criterion-and-faithfulness]]).

[F4] An eigenvector is nonzero and satisfies $Av=\lambda v$; a basis is an independent spanning family. A real symmetric form with a diagonal matrix having two positive entries, one negative entry and no zeros has inertia $(2,1,0)$ and scalar signature $1$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[def-linear-basis]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F5] A free product of groups is characterized by its universal property: homomorphisms from the factors into any group extend uniquely to a homomorphism from the free product ([[def-free-product-of-a-family-of-groups]]).

## Verification

**Proof technique:** direct.

1.1 **The Gram matrix and inertia.** By [F1], $[B]=2I-J$, where $Jx=(x_s+x_t+x_r)(1,1,1)$. Put $p=(1,-1,0)$, $q=(1,1,-2)$ and $a=(1,1,1)$ in the coordinates $(e_s,e_t,e_r)$. The coordinate matrix with columns $p,q,a$ has determinant $6\ne0$, so they form a basis. Since $Jp=Jq=0$ and $Ja=3a$, the matrix $2I-J$ has eigenvalues $2,2,-1$ in this basis. Direct substitution into $B(x,y)=2\sum_i x_i y_i-(\sum_i x_i)(\sum_i y_i)$ gives $B(p,p)=4$, $B(q,q)=12$, $B(a,a)=-3$, and all three cross terms zero. Thus $B$ has diagonal matrix $\operatorname{diag}(4,12,-3)$ in this basis, so it is nondegenerate and indefinite with inertia $(2,1,0)$, scalar signature $1$, and positive/negative index pair $(2,1)$. Finally $V_+$ is closed under addition and nonnegative scaling, contains no line because $V_+\cap(-V_+)=\{0\}$, and is not all of $V$ because $-e_s\notin V_+$. This is (i). [F1, F4, algebra]

1.2 **The signs of the computed roots.** By [F2] one has $\ell(s)=1$, $\ell(st)=2$ and $\ell(sts)=3$, so $\ell(st)>\ell(s)$ and $\ell(sts)>\ell(st)$; the length criterion [F3] therefore gives $\rho(s)e_t\in\Phi_+$ and $\rho(st)e_s\in\Phi_+$. By [F1], $\rho(s)e_t=e_t+2e_s$, $\rho(st)e_t=\rho(s)\rho(t)e_t=-\rho(s)e_t=-e_t-2e_s\in\Phi_-$, and $\rho(st)e_s=\rho(s)(e_s+2e_t)=-e_s+2(e_t+2e_s)=3e_s+2e_t$. The signs are consistent with the criterion also in the first two cases because $\ell(stt)=\ell(s)=1<2=\ell(st)$, so $\rho(st)e_t\in\Phi_-$ says exactly that right multiplication by $t$ shortens $st$. [F1, F2, F3, algebra]

1.3 **A nontrivial image.** By [F1], $\rho(r)e_s=e_s+2e_r$, so $\rho(tr)e_s=\rho(t)(e_s+2e_r)=(e_s+2e_t)+2(e_r+2e_t)=e_s+6e_t+2e_r$ and $\rho(str)e_s=\rho(s)(e_s+6e_t+2e_r)=-e_s+6(e_t+2e_s)+2(e_r+2e_s)=15e_s+6e_t+2e_r$. This differs from $e_s$ because its value at $t$ is $6$ while $e_s(t)=0$, so $\rho(str)\ne\mathrm{id}_V$. [F1, F4, algebra]

1.4 **The degenerate rank-two case.** Restrict to $P=\mathbb Re_s+\mathbb Re_t$. By [F1] the Gram matrix of $B|_P$ in $(e_s,e_t)$ is $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, and $B(x_se_s+x_te_t,x_se_s+x_te_t)=(x_s-x_t)^2\ge0$, so $B|_P$ is positive semidefinite; its radical is $\{x:B(x,e_s)=B(x,e_t)=0\}=\{x:x_s=x_t\}=\mathbb R(e_s+e_t)$, a line, so $B|_P$ has rank one and in this two-generator case the map $v\mapsto B|_P(v,-)$ from $P$ to $P^*$ has nonzero kernel and is therefore not an identification of $P$ with $P^*$; this does not assert that the original nondegenerate rank-three form has a kernel. [F1, algebra]

1.5 **The free-product assertion.** For each $v\in\{s,t,r\}$, the relation $v^2=1$ defines a homomorphism $\iota_v:\mathbb Z/2\to W$ sending the nonidentity element to $v$. A homomorphism from $\mathbb Z/2$ into any group $H$ is uniquely determined by an element $h_v$ with $h_v^2=1$. Since our Coxeter presentation has no finite off-diagonal relators, its universal property in [F2] gives exactly one homomorphism $W\to H$ sending $v$ to $h_v$ for each $v$. Therefore $(W,\iota_s,\iota_t,\iota_r)$ satisfies the free-product universal property [F5]. [F2, F5, algebra]

2.1 **Faithfulness.** The matrix $m$ is a Coxeter matrix on the finite set $S$, so the homomorphism $\rho:W\to\mathrm{GL}(V)$ is injective by [F3]; this applies to $S$ and to the degenerate two-generator subcase $S'=\{s,t\}$ as well, so in both cases $\rho$ is faithful even though $B$ is indefinite, respectively degenerate. With (i) from 1.1, (ii) from 1.2 and 1.3 together with [F3], and (iii) from 1.4, all clauses are verified: neither indefiniteness nor degeneracy of $B$ obstructs faithfulness. [F3, step 1.1, step 1.2, step 1.3, step 1.4] ∎
