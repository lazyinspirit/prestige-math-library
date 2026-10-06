---
id: thm-direct-method-for-convex-integral-functionals
kind: theorem
title: "The direct method for convex integral functionals"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-direct-method-in-a-reflexive-banach-space, lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous, def-convex-and-strictly-convex-functionals-on-a-banach-space, cor-strict-convexity-gives-uniqueness-of-a-minimiser, def-wkp-zero-as-a-sobolev-closure, lem-differentiation-of-an-integral-functional, lem-caratheodory-composition-is-measurable, thm-first-variation-vanishes-at-an-interior-minimiser, def-sobolev-space-wkp-and-its-norm, thm-fatou-lemma, def-reflexive-banach-space, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, thm-poincare-inequality-for-w-one-p-zero, lem-w-one-p-is-reflexive, thm-norm-closed-convex-iff-weakly-closed, def-ultrafilter-extension-principle, def-dependent-choice, lem-dependent-choice-implies-countable-choice, def-hahn-banach-extension-principle-relative, def-l-p-space-as-a-quotient-by-null-functions, thm-holder-inequality-for-integrals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Sections 3-4, printed pp. 41-45 (Theorem 2.44(ii) and the existence criteria)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Examples 13.7-13.8 and Corollary 13.4, printed pp. 299-301"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations, University of Illinois (complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Section 3.10, printed pp. 79-82 (Lemma 3.30 and Proposition 3.31)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the ultrafilter lemma, DC and HB. Let $n\ge2$, $1<p<\infty$, let $\Omega\subseteq\mathbb R^n$ be a bounded $C^1$ domain, and let $u_b\in W^{1,p}(\Omega)$. Set
$$K:=u_b+W^{1,p}_0(\Omega),$$
where $W^{1,p}_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in $W^{1,p}(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]]). Let $f:\Omega\times\mathbb R\times\mathbb R^n\to\mathbb R$ be a Caratheodory integrand ([[lem-caratheodory-composition-is-measurable]]) such that for almost every $x$ the map $(s,\xi)\mapsto f(x,s,\xi)$ is convex and lower semicontinuous ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]). Assume the upper growth bound
$$f(x,s,\xi)\le C\,(1+|s|^p+|\xi|^p)+G(x)\qquad\text{for almost every }x\text{ and all }(s,\xi),$$
where $G\in L^1(\Omega)$, together with the coercivity hypothesis: there are $\nu>0$, $c\ge0$, $q\in[1,p]$ and $h\in L^1(\Omega)$, $h\ge0$, with
$$f(x,s,\xi)\ \ge\ \nu|\xi|^p-c|s|^q-h(x)$$
for almost every $x$ and all $(s,\xi)$, where, in the case $q=p$, the smallness condition
$$2^{p-1}c\,C_P^{\,p}\le\nu\,2^{-p}$$
holds for a Poincare constant $C_P$ of $W^{1,p}_0(\Omega)$ ([[thm-poincare-inequality-for-w-one-p-zero]]). Then $I(u)=\int_\Omega f(x,u(x),Du(x))\,dx$ is finite on $W^{1,p}(\Omega)$ and attains its infimum on $K$. If in addition $f$ satisfies the hypotheses of [[lem-differentiation-of-an-integral-functional]], then every minimiser $u$ satisfies
$$\int_\Omega\big(f_s(x,u,Du)\,v+f_\xi(x,u,Du)\cdot Dv\big)\,dx=0\qquad(v\in W^{1,p}_0(\Omega)),$$
the weak Euler-Lagrange equation for zero-boundary variations. If $f(x,\cdot,\cdot)$ is strictly convex for almost every $x$, the minimiser is unique.
## Facts & Assumptions

**Given:** The ultrafilter lemma, DC (which implies Countable Choice by [[lem-dependent-choice-implies-countable-choice]]) and HB; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$, $n\ge2$, $1<p<\infty$; a lift $u_b\in W^{1,p}(\Omega)$ and the nonempty affine class $K=u_b+W^{1,p}_0(\Omega)$; and a Caratheodory integrand $f:\Omega\times\mathbb R\times\mathbb R^n\to\mathbb R$ with $(s,\xi)\mapsto f(x,s,\xi)$ convex and lower semicontinuous for almost every $x$, satisfying the upper growth bound $f(x,s,\xi)\le C(1+|s|^p+|\xi|^p)+G(x)$ with $G\in L^1(\Omega)$, and the coercivity bound $f(x,s,\xi)\ge\nu|\xi|^p-c|s|^q-h(x)$ with $\nu>0$, $c\ge0$, $q\in[1,p]$, $0\le h\in L^1(\Omega)$, where $2^{p-1}c\,C_P^{\,p}\le\nu2^{-p}$ holds in the case $q=p$ for a Poincare constant $C_P$ of $W^{1,p}_0(\Omega)$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F1] For measurable $u,w$ the composition $x\mapsto f(x,u(x),w(x))$ is measurable ([[lem-caratheodory-composition-is-measurable]]).

[F2] $W^{1,p}_0(\Omega)$ is a closed linear subspace by its definition as the closure of $C_c^\infty(\Omega)$; hence $K=u_b+W^{1,p}_0(\Omega)$ is nonempty, convex and norm closed. Under HB, norm-closed convex sets are weakly closed ([[def-wkp-zero-as-a-sobolev-closure]], [[thm-norm-closed-convex-iff-weakly-closed]]).

[F3] On the bounded domain, $u\in W^{1,p}(\Omega)$ has $u,Du\in L^p(\Omega)$, and $L^p(\Omega)\subseteq L^q(\Omega)$ for $q\le p$ with $\|w\|_q\le|\Omega|^{1/q-1/p}\|w\|_p$; for $q<p$ this follows by applying Holder to $|w|^q$ and $1$ with conjugate exponents $p/q$ and $p/(p-q)$, while $q=p$ is equality ([[thm-holder-inequality-for-integrals]]); the space $W^{1,p}(\Omega)$ is a real Banach space and its classes are $L^p$ classes ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] Fatou's lemma for nonnegative measurable functions ([[thm-fatou-lemma]]).

[F5] If a sequence converges in $L^p$, $1\le p<\infty$, then a subsequence converges almost everywhere ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]).

[F6] Under HB and Countable Choice, a convex functional that is sequentially lower semicontinuous in the norm topology on a nonempty convex set is weakly sequentially lower semicontinuous ([[lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous]]).

[F7] $W^{1,p}(\Omega)$ is a real reflexive Banach space under the ultrafilter lemma, DC and HB ([[lem-w-one-p-is-reflexive]], [[def-reflexive-banach-space]]), and the direct method in a reflexive Banach space yields a minimiser ([[thm-direct-method-in-a-reflexive-banach-space]]); a nonempty convex norm-closed set is admissible by [[thm-norm-closed-convex-iff-weakly-closed]].

[F8] If $f$ satisfies the hypotheses of [[lem-differentiation-of-an-integral-functional]], then $I$ is Gateaux differentiable with the displayed integral derivative. A minimiser on $u_b+W^{1,p}_0(\Omega)$ is a local minimiser along every direction in $W^{1,p}_0(\Omega)$, so the first-variation theorem gives vanishing derivative on that space ([[thm-first-variation-vanishes-at-an-interior-minimiser]]).

[F9] A proper, strictly convex functional has at most one minimiser on a convex set ([[cor-strict-convexity-gives-uniqueness-of-a-minimiser]], [[def-convex-and-strictly-convex-functionals-on-a-banach-space]]); in the application $I$ is finite on the nonempty class $K$, hence proper.



## Proof

**Proof technique:** direct; finiteness, convexity and norm lower semicontinuity of $I$, then the coercivity estimate and the direct method.

1.1 Finiteness of $I$. For $u\in W^{1,p}(\Omega)$ the integrand $x\mapsto f(x,u(x),Du(x))$ is measurable by [F1]. Its positive part is bounded by $C(1+|u|^p+|Du|^p)+|G|$ because $G\le|G|$, and this has finite integral because $\Omega$ is bounded, $u,Du\in L^p$ and $|G|\in L^1$; its negative part is bounded by $c|u|^q+h$, whose integral is finite because $q\le p$, $u\in L^q$ by [F3] and $h\in L^1$. Hence $I(u)=\int_\Omega f(x,u(x),Du(x))\,dx$ is a well-defined real number, and $I$ is proper as $K\ne\varnothing$. [F1, F2, F3, given]

2.1 Convexity of $I$. For $u,v\in W^{1,p}(\Omega)$ and $\lambda\in[0,1]$ the pair $(\lambda u+(1-\lambda)v,\lambda Du+(1-\lambda)Dv)$ equals $\lambda(u,Du)+(1-\lambda)(v,Dv)$ because the weak gradient is linear, and for almost every $x$ the convexity of $f(x,\cdot,\cdot)$ gives $f(x,\lambda u+(1-\lambda)v,\lambda Du+(1-\lambda)Dv)\le\lambda f(x,u,Du)+(1-\lambda)f(x,v,Dv)$. All three functions are integrable by step 1.1, so integrating gives $I(\lambda u+(1-\lambda)v)\le\lambda I(u)+(1-\lambda)I(v)$: $I$ is convex on the real vector space $W^{1,p}(\Omega)$. [F3, step 1.1, algebra]

2.2 Norm lower semicontinuity of $I$. Let $u_j\to u$ in $W^{1,p}$. Suppose, for contradiction, that $I(u)>\liminf_jI(u_j)=:\ell$; since $I$ is real-valued, choose a real $t$ with $\ell<t<I(u)$. Then $I(u_j)\le t$ for infinitely many $j$, so passing to that subsequence (and relabelling) we may assume $I(u_j)\le t$ for all $j$ and still $u_j\to u$ in $W^{1,p}$; in particular $u_j\to u$ and $Du_j\to Du$ in $L^p$. By [F5] pass to a further subsequence with $u_j\to u$ and $Du_j\to Du$ almost everywhere. Since $(s,\xi)\mapsto f(x,s,\xi)$ is lower semicontinuous at $(u(x),Du(x))$ for almost every $x$, the pointwise limit inferior satisfies $f(x,u,Du)+c|u|^q+h\le\liminf_j\big(f(x,u_j,Du_j)+c|u_j|^q+h\big)$. The shifted integrands $\varphi_j:=f(x,u_j,Du_j)+c|u_j|^q+h$ are nonnegative by the coercivity bound and measurable by [F1], so Fatou's lemma [F4] gives $\int_\Omega(f(x,u,Du)+c|u|^q+h)\le\liminf_j\int_\Omega\varphi_j=\liminf_jI(u_j)+c\|u\|_q^q+\|h\|_1$, where $\|u_j\|_q\to\|u\|_q$ because $u_j\to u$ in $L^p$ and $q\le p$. Cancelling the common finite terms yields $I(u)\le\liminf_jI(u_j)\le t$, contradicting $t<I(u)$. Hence $I$ is sequentially lower semicontinuous in the norm topology. [F4, F5, step 1.1, given]

2.3 Coercivity of $I$ on $K$. Write each $u\in K$ as $u=u_b+v$ with $v\in W^{1,p}_0(\Omega)$. The lower growth bound gives $I(u)\ge\nu\|Du\|_p^p-c\|u\|_q^q-\|h\|_1$, while the triangle inequality and $(a+b)^p\le2^{p-1}(a^p+b^p)$ give $\|Du\|_p^p\ge2^{1-p}\|Dv\|_p^p-\|Du_b\|_p^p$. By Poincare, $\|v\|_p\le C_P\|Dv\|_p$, and with $C_\Omega:=|\Omega|^{1/q-1/p}$ (equal to $1$ when $q=p$), Holder and the triangle inequality imply   $$\|u\|_q^q\le C_\Omega^q\,2^{q-1}\big(\|u_b\|_p^q+C_P^q\|Dv\|_p^q\big).$$ If $q<p$, these estimates yield $I(u)\ge\nu2^{1-p}\|Dv\|_p^p-c'\|Dv\|_p^q-C''$, which tends to $+\infty$ as $\|Dv\|_p\to\infty$. If $q=p$, they yield $I(u)\ge(\nu2^{1-p}-c2^{p-1}C_P^p)\|Dv\|_p^p-C''\ge\nu2^{-p}\|Dv\|_p^p-C''$ by the smallness assumption. Finally, $u=u_b+v$ and Poincare give $\|u\|_{W^{1,p}}\le C_b+C_1\|Dv\|_p$ for fixed finite constants $C_b,C_1$, so $\|u\|_{W^{1,p}}\to\infty$ forces $\|Dv\|_p\to\infty$. Thus $I$ is coercive on $K$. [F2, F3, step 1.1, given, algebra]

3.1 Weak sequential lower semicontinuity on $K$. By steps 2.1 and 2.2 the functional $I$ is convex and norm lower semicontinuous on the convex set $W^{1,p}(\Omega)$; [F6] therefore makes $I$ weakly sequentially lower semicontinuous on $W^{1,p}(\Omega)$, hence on the subset $K$. [F6, step 2.1, step 2.2]

4.1 Existence of a minimiser. By [F7] the space $W^{1,p}(\Omega)$ is a real reflexive Banach space under the present choice principles, and $K$ is nonempty, convex and weakly closed by [F2], in particular weakly sequentially closed. The functional $I$ is proper by step 1.1, coercive on $K$ by step 2.3 and weakly sequentially lower semicontinuous on $K$ by step 3.1, so the direct method [F7] provides $u_0\in K$ with $I(u_0)=\inf_{K}I$. [F2, F7, step 1.1, step 2.3, step 3.1]

5.1 The Euler-Lagrange clause. Suppose in addition that $f$ satisfies the hypotheses of the differentiation lemma. Then [F8] gives the Gateaux derivative formula. Since $K=u_b+W^{1,p}_0(\Omega)$, a minimiser $u_0$ is a local minimiser along every direction in $W^{1,p}_0(\Omega)$; applying the first-variation theorem with $V=W^{1,p}_0(\Omega)$ yields   $$\int_\Omega\big(f_s(x,u_0,Du_0)\,v+f_\xi(x,u_0,Du_0)\cdot Dv\big)\,dx=0\qquad(v\in W^{1,p}_0(\Omega)).$$ This is the weak Euler-Lagrange equation for the affine zero-boundary variation class. [F8, step 4.1]

6.1 Strict convexity and uniqueness. Assume finally that $f(x,\cdot,\cdot)$ is strictly convex for almost every $x$. For distinct $u\ne v$ in $K$ the set $S:=\{x:(u(x),Du(x))\ne(v(x),Dv(x))\}$ has positive measure, because otherwise $u=v$ and $Du=Dv$ almost everywhere, that is, $u=v$ as elements of $W^{1,p}(\Omega)$. For almost every $x\in S$ and every $\lambda\in(0,1)$ the strict convexity of $f(x,\cdot,\cdot)$ gives $f(x,\lambda u+(1-\lambda)v,\lambda Du+(1-\lambda)Dv)<\lambda f(x,u,Du)+(1-\lambda)f(x,v,Dv)$, the values being finite by step 1.1; integrating over $S$ and using the convex inequality elsewhere gives $I(\lambda u+(1-\lambda)v)<\lambda I(u)+(1-\lambda)I(v)$, so $I$ is strictly convex on the convex set $K$. By [F9] the minimiser of step 4.1 is then unique. [F9, step 1.1, step 4.1] ∎
