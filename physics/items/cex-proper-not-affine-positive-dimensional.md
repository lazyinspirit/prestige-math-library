---
id: cex-proper-not-affine-positive-dimensional
kind: counterexample
title: "Under AC, proper integral finite-type schemes over fields with multiple points are not affine"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-global-functions-proper-integral-variety
  - thm-affine-scheme-ring-anti-equivalence
  - def-affine-morphism-schemes
  - def-scheme-over-base
  - def-prime-and-maximal-ideals
  - def-zero-divisor-and-integral-domain
  - def-dimension-noetherian-topological-space
  - def-relative-projective-space-standard-charts
  - thm-projective-space-proper-over-base
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - thm-noetherian-ring-has-noetherian-spectrum
  - def-noetherian-topological-space
  - lem-chain-dimension-open-cover
  - def-prime-spectrum-and-vanishing-sets
  - def-integral-scheme
  - def-proper-morphism
  - def-sheaf-on-topological-space
  - thm-global-sections-affine-scheme
  - thm-sections-basic-open-affine-scheme
  - def-polynomial-degree-leading-coefficient-and-monic
  - def-polynomial-ring-over-a-commutative-ring
  - thm-universal-property-of-a-polynomial-ring
  - cor-factor-theorem-over-a-commutative-ring
  - thm-quotient-is-domain-iff-ideal-prime
  - thm-first-isomorphism-theorem-rings
  - cor-polynomial-ring-over-a-domain-is-a-domain
  - def-open-immersion-schemes
  - def-irreducible-topological-space-and-subset
  - thm-quotient-is-field-iff-ideal-maximal
  - def-reduction-of-scheme
  - def-nilradical-and-reduced-ring
  - def-reduced-affine-scheme
  - def-generic-point-irreducible-closed-subset
  - def-interior-closure-boundary-top
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Varieties, Section 33.9 (a proper variety of positive dimension is not affine)"
      url: https://stacks.math.columbia.edu/download/varieties.pdf
    - title: "Vakil, The Rising Sea, Section 8.3"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $X$ be a nonempty proper
integral finite-type $k$-scheme that has more than one point. Then the structure
morphism $X\to\operatorname{Spec}k$ is not affine; in particular $X$ is not an
affine scheme over $k$.

Consequently no such $X$ whose underlying space is Noetherian of positive
dimension ([[def-dimension-noetherian-topological-space]]) is affine over $k$:
positive dimension forces more than one point.

For every field $k$, the projective line $\mathbb P^1_k$ of
[[def-relative-projective-space-standard-charts]] is a nonempty proper integral
finite-type $k$-scheme of positive dimension and is not affine over $k$.
Directly, $\Gamma(\mathbb P^1_k,\mathcal O_{\mathbb P^1_k})=k$ while
$\mathbb P^1_k$ has more than one point.

## Facts & Assumptions

**Given:** A field $k$, a nonempty proper integral finite-type $k$-scheme $X$ with structure morphism $f:X\to\operatorname{Spec}k$ having more than one point, and, for the projective-line clause, the projective line $\mathbb P^1_k$ with its charts $U_0=\operatorname{Spec}k[t]$, $U_\infty=\operatorname{Spec}k[u]$ and overlap $W=U_0\cap U_\infty$.

[F1] Assume AC. Let $k$ be a field and let $X$ be a nonempty proper integral finite-type $k$-scheme with function field $K=k(X)$. Then $\Gamma(X,\mathcal O_X)$ is a finite field extension of $k$ contained in $K$. ([[thm-global-functions-proper-integral-variety]])

[F2] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ gives a natural bijection $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS} (\operatorname{Spec}B,\operatorname{Spec}A)$, so $A\mapsto\operatorname{Spec}A$ is a contravariant equivalence from commutative rings to affine schemes with quasi-inverse global sections; hence an affine scheme $Y$ satisfies $Y\cong\operatorname{Spec}\Gamma(Y,\mathcal O_Y)$ canonically. ([[thm-affine-scheme-ring-anti-equivalence]])

[F3] A morphism of schemes $f:X\to S$ is **affine** when $f^{-1}(U)$ is affine for every affine open subscheme $U\subseteq S$. The empty scheme is affine. ([[def-affine-morphism-schemes]])

[F4] An $S$-scheme is a scheme $X$ equipped with a morphism $X\to S$, and an $S$-morphism is a scheme morphism commuting with the maps to $S$; for an affine base $S=\operatorname{Spec}A$ the relative affine space is $\mathbf A^1_S=\operatorname{Spec}A[t]$. In particular a $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$. ([[def-scheme-over-base]])

[F5] Let $K$ be a field. Its only ideals are $(0)$ and $K$: if an ideal contains a nonzero $x$, it also contains $x^{-1}x=1$ and hence equals $K$.

[F6] A proper ideal $P\subsetneq R$ of a commutative ring is **prime** when $ab\in P$ implies $a\in P$ or $b\in P$, and $M\subsetneq R$ is **maximal** when there is no proper ideal strictly between $M$ and $R$. ([[def-prime-and-maximal-ideals]])

[F7] A domain is a commutative ring $R$ with $1\ne0$ and no zero divisors: $ab=0$ implies $a=0$ or $b=0$. A field has $1\ne0$ and no zero divisors, so a field is a domain. ([[def-zero-divisor-and-integral-domain]])

[F8] For a Noetherian topological space $T$, $\dim T$ is the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$; a one-member chain has length zero. In particular $\dim T>0$ means that there are nonempty irreducible closed subsets $Z_0\subsetneq Z_1$ of $T$. ([[def-dimension-noetherian-topological-space]])

[F9] For every field $k$, the standard charts of $\mathbb P^1_k$ are $U_0\cong\operatorname{Spec}k[t]$ and $U_\infty\cong\operatorname{Spec}k[u]$; they are open subschemes covering $\mathbb P^1_k$. Their overlap is the pair of basic opens $D(t)$ and $D(u)$, identified through $t\mapsto u^{-1}$, so $W=U_0\cap U_\infty\cong\operatorname{Spec}k[t,t^{-1}]$ and $tu=1$ there. ([[def-relative-projective-space-standard-charts]])

[F10] A sheaf on a topological space satisfies locality and gluing: sections agreeing on the members of an open cover are equal, and a family of sections which agree on the overlaps of a cover glues to a unique section. ([[def-sheaf-on-topological-space]])

[F11] The canonical map $A\to\Gamma(\operatorname{Spec}A,\mathcal O)$ is an isomorphism, including when $A=0$. ([[thm-global-sections-affine-scheme]])

[F12] For $f\in A$, $\Gamma(D(f),\mathcal O)=A_f$: the sections of the structure sheaf on a basic open are the localisation, and the restriction from $D(f)$ to $D(g)\subseteq D(f)$ is the canonical localisation map $A_f\to A_g$. ([[thm-sections-basic-open-affine-scheme]])

[F13] Let $0\ne f=\sum_ia_ix^i\in R[x]$. Its **degree** is the largest natural number $n$ with $a_n\ne0$, and its leading coefficient is $a_n$. The zero polynomial has no degree; every degree statement separates it. ([[def-polynomial-degree-leading-coefficient-and-monic]])

[F14] For a commutative ring $R$ the polynomial ring $R[x]$ consists of the finite sums $\sum_{i=0}^n a_ix^i$ with $a_i\in R$, with the usual addition and multiplication of polynomials; the notation $b=\sum_{j=0}^e b_ju^j$ lists the coefficients of $b\in R[u]$. ([[def-polynomial-ring-over-a-commutative-ring]])

[F15] Let $R,S$ be commutative rings, $\varphi:R\to S$ a unital ring homomorphism and $s\in S$. There is a unique unital ring homomorphism $\operatorname{ev}_{\varphi,s}:R[x]\to S$ extending $\varphi$ on constants with $x\mapsto s$, given by $\operatorname{ev}_{\varphi,s}(\sum_ia_ix^i)=\sum_i\varphi(a_i)s^i$. ([[thm-universal-property-of-a-polynomial-ring]])

[F16] Let $R$ be a commutative ring and $P\trianglelefteq R$ an ideal. Then $R/P$ is an integral domain if and only if $P$ is a prime ideal. ([[thm-quotient-is-domain-iff-ideal-prime]])

[F17] First isomorphism theorem for rings: $R/\ker\varphi\cong\operatorname{im}\varphi$ for a ring homomorphism $\varphi:R\to S$. ([[thm-first-isomorphism-theorem-rings]])

[F18] Let $R$ be a commutative ring, $a\in R$ and $h\in R[x]$. Then $h(a)=0$ if and only if $x-a$ divides $h$ in $R[x]$. ([[cor-factor-theorem-over-a-commutative-ring]])

[F19] If $R$ is an integral domain then $R[x]$ is an integral domain; in particular $k[t]$ is a domain for every field $k$. ([[cor-polynomial-ring-over-a-domain-is-a-domain]])

[F20] A morphism $j:U\to X$ is an **open immersion** if it identifies $U$ isomorphically with an open subscheme of $X$; such a $j$ is injective on points, and the chart inclusions of an open cover of a scheme are open immersions. ([[def-open-immersion-schemes]])

[F21] The Axiom of Choice (AC) states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F22] Assume AC. For every scheme $S$ and every $n\ge0$, the projection $\mathbb P^n_S\to S$ is proper. ([[thm-projective-space-proper-over-base]])

[F23] For every field $K$ and every finite $d\ge0$, the polynomial ring $K[x_1,\ldots,x_d]$ is Noetherian. ([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]])

[F24] Assume AC. The spectrum of a Noetherian commutative ring is a Noetherian topological space. ([[thm-noetherian-ring-has-noetherian-spectrum]])

[F25] A topological space is Noetherian when every descending chain of closed subsets stabilizes. ([[def-noetherian-topological-space]])

[F26] For every open cover $T=\bigcup_iU_i$ of a Noetherian topological space, $\dim T=\sup_i\dim U_i$. ([[lem-chain-dimension-open-cover]])

[F27] On $\operatorname{Spec}A$ the closed subsets are the vanishing sets $V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$. ([[def-prime-spectrum-and-vanishing-sets]])

[F28] An integral scheme is nonempty, reduced and irreducible. ([[def-integral-scheme]])

[F29] A proper morphism is separated, of finite type and universally closed. ([[def-proper-morphism]])

[F30] A topological space $X$ is **irreducible** when $X\ne\varnothing$ and whenever $X=F_1\cup F_2$ with $F_1,F_2\subseteq X$ closed, one has $X=F_1$ or $X=F_2$; a subset is irreducible when the subspace topology it carries is irreducible. ([[def-irreducible-topological-space-and-subset]])

[F31] For a commutative ring $R$ and an ideal $M\subseteq R$, the quotient $R/M$ is a field if and only if $M$ is a maximal ideal. ([[thm-quotient-is-field-iff-ideal-maximal]])

[F32] For a scheme $X$ the ideal sheaf $\mathcal N_X$ has as its germs the nilpotent elements of the local rings of $X$; equivalently, a section lies in $\mathcal N_X(U)$ exactly when it is locally nilpotent on $U$. ([[def-reduction-of-scheme]])

[F33] A commutative ring $R$ is **reduced** when its nilradical is the zero ideal, equivalently when the only nilpotent element of $R$ is $0$. ([[def-nilradical-and-reduced-ring]])

[F34] An affine scheme is **reduced** if (equivalently, for every) coordinate ring $A$ is reduced. ([[def-reduced-affine-scheme]])

[F35] A point $x$ is a **generic point** of a closed subset $Z$ when $\overline{\{x\}}=Z$; for a prime $\mathfrak p$ of a ring $A$ the point $\mathfrak p$ is generic for $V(\mathfrak p)$. ([[def-generic-point-irreducible-closed-subset]])

[F36] For $A\subseteq X$ the closure $\overline{A}$ is the smallest closed superset of $A$. ([[def-interior-closure-boundary-top]])

## Proof

**Proof technique:** direct: a $k$-morphism $X\to\operatorname{Spec}k$ that is affine makes $X$ an affine scheme, so $X\cong\operatorname{Spec}\Gamma$ with $\Gamma$ a finite field extension of $k$ by the global-functions theorem, and the spectrum of a field is a single point, contradicting that $X$ has more than one point. For the projective line the global sections are computed to be $k$ from the two-chart cover, while the points defined by the ideals $(t)$ and $(0)$ are distinct.

1.1 Let $f:X\to\operatorname{Spec}k$ be the structure morphism of the $k$-scheme $X$ [F4]. Suppose first that $f$ is affine. Since $\operatorname{Spec}k$ is an affine open subscheme of itself, [F3] gives that $X=f^{-1}(\operatorname{Spec}k)$ is an affine scheme. [F3, F4]

1.2 Now let $k$ be any field and consider the projective line $\mathbb P^1_k$ of [F9]. Its charts $U_0=\operatorname{Spec}k[t]$ and $U_\infty=\operatorname{Spec}k[u]$ are open subschemes covering $\mathbb P^1_k$ and $W=U_0\cap U_\infty$ is the affine open $\operatorname{Spec}k[t,t^{-1}]$, identified with $\operatorname{Spec}k[u,u^{-1}]$ by $t\mapsto u^{-1}$. By [F11] the global sections are $\Gamma(U_0,\mathcal O)=k[t]$ and $\Gamma(U_\infty,\mathcal O)=k[u]$, and by [F12] the restrictions to the overlap are the localisations $k[t]\to k[t,t^{-1}]$ and $k[u]\to k[u,u^{-1}]$, the second followed by the identification $u\mapsto t^{-1}$. [F9, F11, F12]

1.3 Two distinct points of $\mathbb P^1_k$ lie in the chart $U_0$: the evaluation map $\varepsilon:k[t]\to k$, $t\mapsto0$, is a unital ring homomorphism by [F15], and its kernel is $(t)$, because $t\in\ker\varepsilon$ and every $h$ with $h(0)=0$ is divisible by $t$ by [F18]; hence by [F17] $k[t]/(t)\cong\operatorname{im}\varepsilon=k$, which is a field and so a domain [F7], and [F16] makes $(t)$ a prime ideal, i.e. a point of $U_0=\operatorname{Spec}k[t]$, while [F31] makes it maximal, since the quotient $k[t]/(t)$ is a field. The zero ideal $(0)$ is also prime, since $k[t]$ is a domain by [F19] and $ab=0$ then forces $a=0$ or $b=0$ [F6, F7]. The ideals differ because $t\in(t)$ but $t\notin(0)$. Since the chart inclusion $U_0\hookrightarrow\mathbb P^1_k$ is an open immersion and therefore injective on points [F20], these are two distinct points of $\mathbb P^1_k$. [F6, F7, F15, F16, F17, F18, F19, F20, F31]

2.1 By the quasi-inverse property in [F2], an affine scheme is canonically isomorphic to the spectrum of its global sections, so $X\cong\operatorname{Spec}\Gamma(X,\mathcal O_X)$. Let $\Gamma:=\Gamma(X,\mathcal O_X)$. [F2, step 1.1]

2.2 By the sheaf axioms [F10], restriction to the open cover $\{U_0,U_\infty\}$ identifies the global sections of the structure sheaf with the matching pairs $$\Gamma(\mathbb P^1_k,\mathcal O)=\{(a,b)\in k[t]\times k[u]:a(t)=b(t^{-1})\ \text{in }k[t,t^{-1}]\},$$ where the second entry is read through the identification $u=t^{-1}$ of the overlap. [F10, step 1.2]

2.3 The projective line also satisfies the hypotheses of the preceding positive-dimension assertion. It is nonempty by step 1.3 and proper over $k$ by [F22], hence of finite type by [F29]. By [F23] the chart rings $k[t]$ and $k[u]$ are Noetherian, so their spectra $U_0,U_\infty$ are Noetherian topological spaces by [F24]. A descending chain of closed subsets of $\mathbb P^1_k$ stabilizes after restriction to each of these two opens and therefore stabilizes globally, since they cover the space; thus $\mathbb P^1_k$ is Noetherian by [F25].

2.4 The prime ideals $(0)\subsetneq(t)$ of $k[t]$ from step 1.3 give a strict chain $V((t))=\{(t)\}\subsetneq V((0))=U_0$ of nonempty closed subsets of $U_0$: the inclusion is strict because $(t)\ne(0)$; $(t)$ is maximal by [F31], so by [F27] the only prime containing it is $(t)$ itself and $V((t))=\{(t)\}$; and every prime contains $(0)$, so $V((0))=U_0$ [F27]. Both subsets are irreducible in the sense of [F30]: a singleton is irreducible, since a cover $\{p\}=F_1\cup F_2$ by closed subsets has $p\in F_i$ for some $i$ and then $F_i=\{p\}$; and $U_0$ has the point $(0)$ generic for $V((0))=U_0$ by [F35], so the closure of $\{(0)\}$ is $U_0$ [F36], every closed subset of $U_0$ containing $(0)$ equals $U_0$, and a closed cover $U_0=F_1\cup F_2$ has some $F_i$ containing $(0)$ and hence equal to $U_0$. Hence $\dim U_0\ge1$ by [F8], and the open-cover formula [F26] gives $\dim\mathbb P^1_k\ge1$. [F8, F26, F27, F30, F31, F35, F36, step 1.3]

3.1 By [F1] the ring $\Gamma$ is a finite field extension of $k$, in particular a field; so by [F5] its only ideals are $(0)$ and $\Gamma$, and $(0)$ is a prime ideal: for $ab\in(0)$, that is $ab=0$, the domain property in [F7] gives $a=0$ or $b=0$, i.e. $a\in(0)$ or $b\in(0)$ [F6]. Since $(0)\ne\Gamma$, the spectrum $\operatorname{Spec}\Gamma$ consists of the single point $(0)$. [F5, F6, F7, step 2.1]

3.2 Such a pair is constant: write $b=\sum_{j=0}^e b_ju^j$ with $b_j\in k$, taking $e=0$ when $b=0$ [F13, F14]. Multiplying the identity $a(t)=b(t^{-1})$ by $t^e$ and using $u=t^{-1}$ gives $t^ea(t)=\sum_{j=0}^e b_jt^{e-j}\in k[t]$, a polynomial whose displayed exponents are at most $e$, so its degree is at most $e$ [F13]. If $a\ne0$, then $t^ea$ has degree $e+\deg a$, because the coefficient of $t^{e+\deg a}$ is the nonzero leading coefficient of $a$ and there are no terms above [F13]; hence $e+\deg a\le e$, so $\deg a=0$ and $a$ is constant. Then $b=a$ is the same constant, and if $a=0$ also $a,b\in k$. Thus $\Gamma(\mathbb P^1_k,\mathcal O)=k$. [F13, F14, step 2.2]

4.1 Hence $X$ has exactly one point, because the isomorphism of step 2.1 is a bijection on underlying sets. This contradicts the hypothesis that $X$ has more than one point. Therefore the structure morphism $f$ is not affine, and $X$ is not an affine scheme over $k$. [step 2.1, step 3.1]

4.2 If $\mathbb P^1_k$ were affine over $k$, then by steps 1.1-1.2 applied to its structure morphism $\mathbb P^1_k\to\operatorname{Spec}k$ it would be $\mathbb P^1_k\cong\operatorname{Spec}\Gamma(\mathbb P^1_k,\mathcal O) =\operatorname{Spec}k$ by step 3.2, and $\operatorname{Spec}k$ has exactly one point by [F5, F6] as in step 3.1, contradicting the two distinct points of step 1.3. Hence the projective line is not affine over $k$. [F1, F5, F6, F9, step 1.1, step 2.1, step 3.1, step 3.2, step 1.3]

5.1 For the dimension refinement, suppose the underlying Noetherian space of $X$ has positive dimension. By [F8] there are nonempty irreducible closed subsets $Z_0\subsetneq Z_1$ of the underlying space; picking a point of $Z_0$ and a point of $Z_1\setminus Z_0$ exhibits two distinct points of $X$, a selection from two nonempty sets and so not a use of AC. Hence the hypothesis of step 4.1 is satisfied and such an $X$ is not affine over $k$. [F8, step 4.1]

6.1 Finally, $\mathbb P^1_k$ is integral by [F28]: it is nonempty by step 1.3; it is reduced because the ideal sheaf $\mathcal N$ of nilpotent germs [F32] restricts over the open chart $U_0$ to the nilpotent-germ sheaf of $\operatorname{Spec}k[t]$, which vanishes since $k[t]$ is a domain [F19], hence a reduced ring [F33], hence a reduced affine scheme [F34], with the same holding over $U_\infty$, so that $\mathcal N=0$ by the sheaf property over the cover $\{U_0,U_\infty\}$ [F10]; and it is irreducible because $U_0$ is open, irreducible, and dense: the overlap $U_0\cap U_\infty=D(u)$ contains the generic point $(0)$ of $U_\infty$ [F35], so it is dense in $U_\infty$, and $U_0$ is dense in $\mathbb P^1_k$: every nonempty open subset either meets $U_0$ directly or lies in $U_\infty$ and, being open there, meets its dense subset $D(u)\subseteq U_0$; then any closed cover $\mathbb P^1_k=F_1\cup F_2$ restricts to the closed cover $U_0=(F_1\cap U_0)\cup(F_2\cap U_0)$ of the irreducible $U_0$, so $U_0\subseteq F_i$ for some $i$, and $F_i$, being closed, contains the closure $\mathbb P^1_k$ of the dense subspace $U_0$ [F36], so $F_i=\mathbb P^1_k$. The Axiom of Choice [F21] is used through the AC-carrying suppliers [F1], [F22] and [F24]; all other selections are finite. [F1, F8, F9, F10, F19, F21, F22, F23, F24, F25, F26, F27, F28, F29, F30, F31, F32, F33, F34, F35, F36, step 1.3, step 2.4] ∎
