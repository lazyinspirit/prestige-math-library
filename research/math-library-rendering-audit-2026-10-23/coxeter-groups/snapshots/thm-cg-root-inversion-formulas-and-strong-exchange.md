---
id: thm-cg-root-inversion-formulas-and-strong-exchange
kind: theorem
title: "The inversion formula $|N(w)|=\\ell(w)$, the root-reflection dictionary and strong exchange"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 11
deps: [thm-cg-root-sign-and-simple-reflection-positivity, thm-cg-root-length-criterion-and-faithfulness, def-cg-geometric-inversion-set, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-hh-coxeter-matrix-word-group-and-length, lem-hh-dihedral-root-recurrence-and-root-sign, thm-induction-principle, def-group, def-group-homomorphism]
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press, 2008; author's complete institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "S4.2, printed pp. 45-47; S4.8, printed pp. 54-57; Appendix D.1, printed pp. 439-442 (Theorem D.1.1, Corollary D.1.2, Lemma D.1.5); read in the extracted full text; figures and exercises excluded"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted full PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "S1.3, printed pp. 11-13; S1.4, printed pp. 15-18 (Strong Exchange Theorem 1.4.3, Corollaries 1.4.4-1.4.5); S4.4, printed pp. 101-105 (Lemma 4.4.3, Proposition 4.4.4, Propositions 4.4.5-4.4.6); read in the extracted full text; exercises excluded"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $S$ be a finite set, $m$ a Coxeter matrix, $W$ the presented group with length $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), $V=\mathbb R^S$ with Coxeter form $B$, canonical reflection homomorphism $\rho$, root system $\Phi=\Phi_+\sqcup\Phi_-$ and reflection set $T=\{wsw^{-1}:w\in W,\ s\in S\}$ ([[def-cg-canonical-reflection-homomorphism]], [[thm-cg-root-sign-and-simple-reflection-positivity]]); every root has $B$-norm one.

**(1) The root-reflection dictionary.** For $\alpha\in\Phi$ choose $w\in W$, $s\in S$ with $\alpha=\rho(w)e_s$ and put $t_\alpha:=wsw^{-1}\in T$. Then:
(i) $t_\alpha$ is independent of the chosen representation of $\alpha$;
(ii) $\rho(t_\alpha)=r_\alpha$, the reflection with normal $\alpha$; and $t_{\rho(w)\alpha}=w\,t_\alpha\,w^{-1}$ for all $w\in W$, $\alpha\in\Phi$;
(iii) $t_{-\alpha}=t_\alpha$, and for $\alpha,\beta\in\Phi$ one has $t_\alpha=t_\beta$ if and only if $\alpha=\pm\beta$;
(iv) the induced map $\{\pm\alpha:\alpha\in\Phi\}\to T$ is a bijection; so is the map $\Phi_+\to T$, $\alpha\mapsto t_\alpha$.

**(2) Inversion formula.** For every $w\in W$ one has $|N(w)|=\ell(w)$ (with $N$ as in [[def-cg-geometric-inversion-set]]); and for every reduced expression $w=s_1\cdots s_n$,
$$N(w)=\bigl\{\rho(s_{i+1}\cdots s_n)^{-1}e_{s_i}:1\le i\le n\bigr\},\qquad N(w^{-1})=\bigl\{\rho(s_1\cdots s_{i-1})e_{s_i}:1\le i\le n\bigr\},$$
the displayed elements being pairwise distinct positive roots.

**(3) Strong exchange.** Let $w\in W$ and $t\in T$ satisfy $\ell(tw)<\ell(w)$, and let $w=s_1\cdots s_n$ be a reduced expression. Then there is a unique $i\in\{1,\dots,n\}$ with
$$tw=s_1\cdots\widehat{s_i}\cdots s_n,\qquad t=r_i:=s_1\cdots s_{i-1}s_is_{i-1}\cdots s_1;$$
moreover, if $\alpha\in\Phi_+$ is the positive root with $t=t_\alpha$, then $\alpha\in N(w^{-1})$ and $\alpha=\rho(s_1\cdots s_{i-1})e_{s_i}$.

## Facts & Assumptions

**Given:** a finite set $S$, a Coxeter matrix $m$, the presented group $W$ with length $\ell$, the space $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi=\Phi_+\sqcup\Phi_-$, the reflections $r_a$, and the reflection set $T=\{wsw^{-1}:w\in W,\ s\in S\}$.

[F1] For all $w\in W$ and $s\in S$ one has $\rho(wsw^{-1})=r_{\rho(w)e_s}$, and every root $\alpha$ satisfies $B(\alpha,\alpha)=1$ ([[lem-cg-reflection-representation-descends-and-root-norms]]).

[F2] The canonical reflection homomorphism $\rho$ is injective ([[thm-cg-root-length-criterion-and-faithfulness]]).

[F3] For $a\in V$ with $B(a,a)\ne0$ the reflection $r_a$ satisfies $r_a(a)=-a$, fixes every $v$ with $B(v,a)=0$ pointwise, preserves $B$, and $\ker B(-,a)$ has dimension $\dim V-1$; since $B(a,a)\ne0$ one has $\mathbb Ra\cap\ker B(-,a)=\{0\}$, so $V=\mathbb Ra\oplus\ker B(-,a)$ and the $(-1)$-eigenspace of $r_a$ is exactly $\mathbb Ra$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]]).

[F4] The reflection set carries the right action $(\varepsilon,r)\cdot s=U_s(\varepsilon,r)=(\varepsilon\cdot(-1)^{\delta(s,r)},\,srs)$ of $W$ on $\{\pm1\}\times T$, and $(\varepsilon,r)\cdot w=(\varepsilon\,\eta(r,w),\,w^{-1}rw)$ for a well-defined sign $\eta(r,w)\in\{\pm1\}$ depending only on $w$ and $r$; for a reduced word with prefix reflections $r_i$ one has $n(r)\in\{0,1\}$, the map $i\mapsto r_i$ is injective, and $\Phi(w):=\{r_1,\dots,r_k\}=\{r\in T:\eta(r,w)=-1\}$ is independent of the reduced expression and has cardinality $\ell(w)$ ([[lem-hh-dihedral-root-recurrence-and-root-sign]]).

[F5] The inversion set is $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$; it satisfies $N(1)=\emptyset$, $N(w^{-1})=-\rho(w)N(w)$, and the step recursion: for $u\in W$, $s\in S$ with $\ell(us)>\ell(u)$ one has $N(us)=\{e_s\}\sqcup sN(u)$ with $sN(u)\subseteq\Phi_+\setminus\{e_s\}$ and $e_s\notin N(u)$, while for $\ell(us)<\ell(u)$ one has $N(us)=s(N(u)\setminus\{e_s\})$ ([[def-cg-geometric-inversion-set]]).

[F6] $\rho$ is a group homomorphism with $\rho(1)=\mathrm{id}_V$ and $\rho(uv)=\rho(u)\rho(v)$; $\rho(s)e_s=-e_s$; and $\Phi=\Phi_+\sqcup\Phi_-$ with $\Phi_-=-\Phi_+$ and $e_s\in\Phi_+$ ([[def-group-homomorphism]], [[thm-cg-root-sign-and-simple-reflection-positivity]]).

[F7] Root-length criterion: for all $x\in W$ and $s\in S$ one has $\ell(xs)>\ell(x)$ if and only if $\rho(x)e_s\in\Phi_+$ ([[thm-cg-root-length-criterion-and-faithfulness]]).

[F8] Induction principle on the natural numbers ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 **Set-up.** Fix a reduced expression $w=s_1\cdots s_n$ of an element $w\in W$, write $w_j:=s_1\cdots s_j$ and $r_i:=w_{i-1}s_iw_{i-1}^{-1}\in T$ for the prefix reflections, and note $\rho(w_j)=\rho(s_1)\cdots\rho(s_j)$ by [F6] and $\rho(r_i)=\rho(w_{i-1}s_iw_{i-1}^{-1})=r_{\rho(w_{i-1})e_{s_i}}$. [F1, F4, F6, given]

1.2 **The inversion formula (2).** We prove by induction on $m$ the assertion: for every $x$ with $\ell(x)=m$ and every reduced expression $x=s_1\cdots s_m$ one has $N(x)=\{\rho(s_{i+1}\cdots s_m)^{-1}e_{s_i}:1\le i\le m\}$ with pairwise distinct elements, and $|N(x)|=m$. For $m=0$ this is $N(1)=\emptyset$ by [F5]. For the step let $x=us_m$ with $u:=s_1\cdots s_{m-1}$, so $\ell(u)=m-1$ and $\ell(us_m)=m>\ell(u)$; the first case of the step recursion of [F5] gives $N(x)=\{e_{s_m}\}\sqcup s_mN(u)$, the union being disjoint with $s_mN(u)\subseteq\Phi_+\setminus\{e_{s_m}\}$. By induction $N(u)=\{\rho(s_{i+1}\cdots s_{m-1})^{-1}e_{s_i}:1\le i\le m-1\}$ with pairwise distinct elements; since $\rho(s_m)\rho(s_{i+1}\cdots s_{m-1})^{-1}=\rho(s_ms_{m-1}\cdots s_{i+1})=\rho(s_{i+1}\cdots s_m)^{-1}$ for $i\le m-1$ by [F6], one has $s_mN(u)=\{\rho(s_{i+1}\cdots s_m)^{-1}e_{s_i}:1\le i\le m-1\}$, and the term $i=m$ with the empty product contributes $e_{s_m}$. Hence $N(x)=\{\rho(s_{i+1}\cdots s_m)^{-1}e_{s_i}:1\le i\le m\}$ with pairwise distinct elements, and $|N(x)|=1+|N(u)|=m$. Applying the same formula to the reversed reduced expression $x^{-1}=s_m\cdots s_1$ and using $\rho(s_{i-1}\cdots s_1)^{-1}=\rho(s_1\cdots s_{i-1})$ gives $N(x^{-1})=\{\rho(s_1\cdots s_{i-1})e_{s_i}:1\le i\le m\}$, again with pairwise distinct elements. The induction principle [F8] gives (2) for every element. [F5, F6, F8, given]

1.3 **The dictionary (i) and (ii).** Let $\alpha\in\Phi$, written as $\alpha=\rho(w)e_s=\rho(w')e_{s'}$. Then $\rho(wsw^{-1})=r_{\rho(w)e_s}=r_\alpha=r_{\rho(w')e_{s'}}=\rho(w's'w'^{-1})$ by [F1], and injectivity of $\rho$ from [F2] gives $wsw^{-1}=w's'w'^{-1}$; so $t_\alpha$ is independent of the representation, which is (i). For (ii), $\rho(t_\alpha)=\rho(wsw^{-1})=r_{\rho(w)e_s}=r_\alpha$; and writing $\alpha=\rho(x)e_s$ one has $\rho(w)\alpha=\rho(wx)e_s$, so $t_{\rho(w)\alpha}=(wx)s(wx)^{-1}=w(xsx^{-1})w^{-1}=wt_\alpha w^{-1}$. [F1, F2, F6, algebra]

1.4 **The shorteners are exactly the prefix reflections.** Keep the reduced expression of 1.1 and let $r\in T$. If $r=r_i$ is a prefix reflection of the word, then $r_iw=w_{i-1}s_iw_{i-1}^{-1}w_{i-1}s_is_{i+1}\cdots s_n=w_{i-1}s_{i+1}\cdots s_n=s_1\cdots\widehat{s_i}\cdots s_n$, so $\ell(r_iw)<n=\ell(w)$; and by [F4] the set $\{r_1,\dots,r_n\}$ equals $\Phi(w)=\{r:\eta(r,w)=-1\}$ and its members are pairwise distinct. Conversely let $r\in T$ with $\ell(rw)<\ell(w)$ and suppose $\eta(r,w)=+1$. The formula of [F4] implies the cocycle identity $\eta(x,uv)=\eta(x,u)\eta(u^{-1}xu,v)$ for all $x\in T$, $u,v\in W$: indeed $(\varepsilon,x)\cdot(uv)=((\varepsilon,x)\cdot u)\cdot v$, and comparing first coordinates of the displayed formula gives the identity. With $x=r$, $u=r$, $v=w$ this gives $\eta(r,rw)=\eta(r,r)\eta(r,w)=\eta(r,r)$; also $\eta(r,1)=1$, since the action of $1$ is the identity. We claim $\eta(r,r)=-1$. Write $r=usu^{-1}$ with $s\in S$, $u\in W$, so that $u^{-1}ru=s$; applying the action formula of [F4] successively along the word $usu^{-1}$ to $(\varepsilon,r)$ gives $(\varepsilon,r)\cdot u=(\varepsilon\eta(r,u),u^{-1}ru)=(\varepsilon\eta(r,u),s)$, then $U_s(\varepsilon\eta(r,u),s)=(-\varepsilon\eta(r,u),s)$ by the definition of $U_s$ in [F4], and then $(\varepsilon,r)\cdot(usu^{-1})=(-\varepsilon\eta(r,u)\eta(s,u^{-1}),r)$. Comparing with $(\varepsilon,r)\cdot r=(\varepsilon\eta(r,r),r)$ from [F4] yields $\eta(r,r)=-\eta(r,u)\eta(s,u^{-1})$. Applying the cocycle identity with $x=s$, $u=u^{-1}$, $v=u$ gives $\eta(s,1)=\eta(s,u^{-1})\eta(usu^{-1},u)$, that is $1=\eta(s,u^{-1})\eta(r,u)$; hence $\eta(r,r)=-\eta(r,u)^2=-1$ under the supposition $\eta(r,w)=+1$. Therefore $\eta(r,rw)=-1$, so $r\in\Phi(rw)=\{x\in T:\eta(x,rw)=-1\}$; by [F4] applied to the shorter element $rw$, the element $r$ is one of the prefix reflections of a reduced expression of $rw$, and the first paragraph of this step applied to that element gives $\ell(r\cdot rw)<\ell(rw)$, that is $\ell(w)<\ell(rw)$, contradicting $\ell(rw)<\ell(w)$. Hence $\eta(r,w)=-1$ and $r\in\Phi(w)=\{r_1,\dots,r_n\}$. Thus $\{r\in T:\ell(rw)<\ell(w)\}=\{r_1,\dots,r_n\}$. [F4, algebra]

2.1 **The dictionary (iii) and (iv).** Let $\alpha,\beta\in\Phi$. Since $\rho(s)e_s=-e_s$ by [F6], the root $-\alpha$ has the representation $-\alpha=-\rho(w)e_s=\rho(ws)e_s$, so $t_{-\alpha}=(ws)s(ws)^{-1}=wsw^{-1}=t_\alpha$. If $t_\alpha=t_\beta$, then $r_\alpha=\rho(t_\alpha)=\rho(t_\beta)=r_\beta$ by 1.3 (ii); by [F3] and $B(\alpha,\alpha)=1$ of [F1] the $(-1)$-eigenspace of $r_\alpha$ is $\mathbb R\alpha$, and that of $r_\beta$ is $\mathbb R\beta$, so $\mathbb R\alpha=\mathbb R\beta$ and $\beta=\lambda\alpha$ with $\lambda\ne0$; then $1=B(\beta,\beta)=\lambda^2B(\alpha,\alpha)=\lambda^2$, so $\lambda=\pm1$. Conversely $t_\alpha=t_{\pm\alpha}$ by the first part. Hence $t_\alpha=t_\beta$ if and only if $\beta=\pm\alpha$, which is (iii). For (iv), the map $[\alpha]\mapsto t_\alpha$ on classes $\{\pm\alpha\}$ is well defined by (i) and (iii) and injective by (iii); it is surjective because every element of $T$ is of the form $wsw^{-1}=t_{\rho(w)e_s}$ by 1.1. Hence it is a bijection. Since $\Phi=\Phi_+\sqcup\Phi_-$ with $\Phi_-=-\Phi_+$ by [F6], every class $\{\alpha,-\alpha\}$ contains exactly one positive root; composing $\alpha\mapsto[\alpha]$ with the class bijection $[\alpha]\mapsto t_\alpha$ gives a bijection $\Phi_+\to T$, $\alpha\mapsto t_\alpha$. [F1, F3, F6, step 1.1, step 1.3, algebra]

3.1 **Strong exchange (3).** Let $w=s_1\cdots s_n$ be a reduced expression and $t\in T$ with $\ell(tw)<\ell(w)$. By 1.4 the shorteners of $w$ are exactly the prefix reflections $r_1,\dots,r_n$, which are pairwise distinct; hence $t=r_i$ for a unique $i\in\{1,\dots,n\}$, and $tw=r_iw=s_1\cdots\widehat{s_i}\cdots s_n$ by the computation in 1.4. For the root clause let $\alpha\in\Phi_+$ satisfy $t=t_\alpha$. By 1.1, $r_i=w_{i-1}s_iw_{i-1}^{-1}=t_{\rho(w_{i-1})e_{s_i}}$; since $\ell(w_{i-1}s_i)=i>\ell(w_{i-1})$, the criterion [F7] gives $\rho(w_{i-1})e_{s_i}\in\Phi_+$. Both $\alpha$ and $\rho(w_{i-1})e_{s_i}$ are positive roots with the same $t$-image $t$, so (iii) from 2.1 gives $\alpha=\rho(w_{i-1})e_{s_i}=\rho(s_1\cdots s_{i-1})e_{s_i}$. Finally, the prefix formula of (2) from 1.2 shows that this root lies in $N(w^{-1})$. This proves (3), while (1) is 1.3 with 2.1 and (2) is 1.2. [step 1.1, step 1.2, step 1.4, step 2.1, F7, algebra] ∎
