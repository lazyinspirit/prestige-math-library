---
id: "thm-lc-laver-function-existence"
kind: "theorem"
title: "Existence of a Laver function at a supercompact"
deps: ["def-lc-laver-anticipation-function","thm-lc-supercompactness-closed-embedding-characterization","thm-lc-measurability-normal-measures-and-embeddings","lem-lc-complete-measures-small-fibres-and-inaccessibility","lem-lc-inaccessible-size-and-rank-bounds","lem-lc-fine-ultrapower-seed-and-normality","thm-lc-los-schema-for-universe-ultrapowers","thm-lc-countable-completeness-and-well-founded-ultrapowers","thm-mostowski-collapse-for-extensional-relations","def-hereditary-size-and-h-kappa","thm-transfinite-recursion","def-axiom-of-choice","thm-hessenberg"]
sources:
  references:
    - title: Laver (1978), pp.385–388; full text not recovered
      url: https://link.springer.com/content/pdf/10.1007/BF02761175.pdf
    - title: Hamkins, A class of strong diamond principles, Theorem 1 pp.7–8; relevant complete proof sketch read
      url: https://users.math.cas.cz/~jech/library/hamkins/LaverDiamond.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC every supercompact cardinal has a Laver anticipation function.

## Facts & Assumptions

**Given:** A supercompact cardinal $\kappa$ in ZFC. All embeddings and ultrapowers use the definable-class, set-restriction and formula-schema conventions of the cited suppliers. No arbitrary class quantifier or uniform truth predicate is introduced.

[F1] The target requires arbitrary sets and arbitrary requested sequence closure. ([[def-lc-laver-anticipation-function]])

[F2] Normal fine measures supply closed embeddings, and closed embeddings supply derived normal fine measures. ([[thm-lc-supercompactness-closed-embedding-characterization]])

[F3] A critical-kappa embedding gives measurability. ([[thm-lc-measurability-normal-measures-and-embeddings]])

[F4] Measurability gives inaccessibility. ([[lem-lc-complete-measures-small-fibres-and-inaccessibility]])

[F5] Below an inaccessible, levels and their elements are small and small families have bounded ranks. ([[lem-lc-inaccessible-size-and-rank-bounds]])

[F6] The normal seed is the pointwise image of the index ordinal. ([[lem-lc-fine-ultrapower-seed-and-normality]])

[F7] Coordinate truth sets characterize each fixed formula in the universe ultrapower. ([[thm-lc-los-schema-for-universe-ultrapowers]])

[F8] Countable completeness gives the definable transitive elementary collapse. ([[thm-lc-countable-completeness-and-well-founded-ultrapowers]])

[F9] Set well-founded extensional relations have unique transitive collapses. ([[thm-mostowski-collapse-for-extensional-relations]])

[F10] Hereditary size uses the root-inclusive transitive closure. ([[def-hereditary-size-and-h-kappa]])

[F11] A uniquely specified set-valued rule yields the transfinite recursion. ([[thm-transfinite-recursion]])

[F12] AC is used for the set well-order, enumerations, cardinal comparisons and the declared ultrapowers. ([[def-axiom-of-choice]])

[F13] Every infinite cardinal has the same cardinality as its square. ([[thm-hessenberg]])

## Proof

1.1 By F2 choose an embedding with critical point $\kappa$. F3 makes $\kappa$ measurable, and F4 makes it inaccessible. In particular $\kappa$ is regular uncountable. F5 gives $|V_\alpha|<\kappa$ for $\alpha<\kappa$, hence $|V_\kappa|=\kappa$: a union of $\kappa$ sets of size at most $\kappa$ has size at most $\kappa$, using AC and the cardinal-square theorem F13, while the ordinals below $\kappa$ give the reverse bound. If a critical-$\kappa$ embedding is given, it fixes $V_\kappa$ pointwise. Indeed enumerate any $y\in V_\kappa$ by $e:\beta\to y$ with $\beta<\kappa$. Then $j(y)=j(e)``\beta=j``y$, and induction on membership fixes all its members. AC is used for these set enumerations and subsequent cardinal comparisons. [F2, F3, F4, F5, F12, F13]

1.2 We establish a closure observation. Let $M$ be a transitive class model of ZFC containing all ordinals and closed under ambient $\mu$-sequences, where $\mu$ is infinite. Any ambient set of at most $\mu$ elements of $M$ belongs to $M$: enumerate it on an ordinal at most $\mu$, pad to length $\mu$, use closure, and restrict internally; the empty case is immediate. Moreover $H_{\mu^+}\subseteq M$, with F10's root-inclusive convention. For $x\in H_{\mu^+}$, choose a bijection from an ordinal $\beta\le\mu$ to $\operatorname{TC}(\{x\})$, and code membership as a relation on $\beta$. The relation is a set of at most $\mu$ ordinal pairs, hence belongs to $M$ by the preceding observation and the cardinal-square theorem F13. It is well-founded and extensional in $M$, since it is so externally and $M$ is transitive. Its internal collapse is a set and is also an external collapse. F9's uniqueness identifies its distinguished root with $x$. The same argument gives agreement of cardinal comparisons at or below $\mu$ and of hereditary-size classes $H_{\eta^+}$ for $\eta\le\mu$: all relevant injections, bijections and their graphs belong to $M$. [F9, F10, F12, F13]

1.3 Here is the exact factor comparison. Suppose $j:V\to M$ is $\theta$-closed, with $\theta\ge\kappa$ infinite cardinal and $j(\kappa)>\theta$. Put $I=P_\kappa(\theta)$, $s=j``\theta$, and derive $U=\{A\subseteq I:s\in j(A)\}$ by F2. Let $j_0:V\to M_0$ be its collapsed normal fine ultrapower, supplied by F2 and F8. For a set function $f:I\to V$ define $$k(\pi_U([f]_U))=j(f)(s).$$ Equality is preserved and reflected: its coordinate equality set belongs to $U$ precisely when its $j$-image contains $s$, precisely when the two evaluations agree. The same calculation for each fixed formula, using F7 and elementarity of $j$, proves that $k$ is a well-defined elementary injection. Constant functions show $k\circ j_0=j$. All maps are definable with the stated set parameters; restrictions are sets by Replacement. F6 identifies the seed $s_0=j_0``\theta$ with the collapsed identity class, so $k(s_0)=s$. [F2, F6, F7, F8]

1.4 Use AC to fix a set well-order $W$ of $V_\kappa$. Define $\ell:\kappa\to V_\kappa$ by the following bounded recursion. At regular uncountable $\gamma<\kappa$, consider cardinals $\gamma\le\eta<\kappa$ and $x\in V_\kappa\cap H_{\eta^+}$ for which no normal fine $\gamma$-complete measure on $P_\gamma(\eta)$ has $j_U(\ell\restriction\gamma)(\gamma)=x$. If there are such pairs, take the least $\eta$ and the $W$-least corresponding $x$ as $\ell(\gamma)$; otherwise put $\ell(\gamma)=\varnothing$. At other $\gamma$ also put empty. This is a uniquely specified set-valued rule on all histories, with an empty fallback for malformed histories. F11 supplies the function. Ultrapower evaluation is a definable set-collapse predicate by F8, so the rule is first-order in set parameters. It does not quantify over arbitrary elementary class embeddings. The explicit cutoff $\eta<\kappa$ and range $V_\kappa$ avoid assuming any reflection bound on unbounded failures at smaller stages. [F2, F8, F10, F11, F12]

2.1 For every $\alpha\le\theta$, the set $s_0\cap j_0(\alpha)=j_0``\alpha$ has ordinal order type $\alpha$. Apply $k$ to the definable order-type operation: $k(\alpha)=\operatorname{otp}(s\cap j(\alpha))=\alpha$. In particular $k$ fixes $\kappa$, including when $\theta=\kappa$. F2 says $M_0$ is $\theta$-closed, so step 1.2 puts $H_{\theta^+}$ inside $M_0$. Given $y$ in that hereditary class, an enumeration $e:\beta\to y$ with $\beta\le\theta$ belongs to $M_0$ by closure. Since $k$ fixes the indexing ordinal pointwise, $k(y)=k(e)``\beta=k``y$. Membership induction on $\operatorname{TC}(\{y\})$ now gives $k(y)=y$. Thus the factor fixes every anticipated object of hereditary size at most $\theta$, not just small ordinals. [step 1.3, step 1.2, F2, F6, F10, F12]

2.2 Fix any $\ell:\kappa\to V_\kappa$ and cardinal $\theta\ge\kappa$, and choose an infinite cardinal $\mu\ge|\mathcal P(P_\kappa(\theta))|$. Let $j:V\to M$ be $\mu$-closed with $j(\kappa)>\mu$. For each cardinal $\kappa\le\eta\le\theta$, $M$ and $V$ have exactly the same normal fine $\kappa$-complete measures on $I=P_\kappa(\eta)$. Indeed step 1.2 puts every small ordinal subset and hence every element of $I$ in $M$, then puts $I$, all its subsets and all subsets of its power set in $M$. This last assertion uses $|\mathcal P(I)|\le\mu$. The sequences of length below $\kappa$ and selector functions used to test completeness and normality also belong to $M$, so those tests agree in both directions. The index and its cardinal comparisons are the same by step 1.2. The same step gives agreement on $H_{\eta^+}$. [step 1.1, step 1.2, F2, F10, F12]

3.1 The internal and external evaluations $j_U(\ell)(\kappa)$ agree for each measure in step 2.2. Here are details that avoid identifying internal Scott rank codes with external ones. In a normal fine ultrapower, the function $x\mapsto\operatorname{otp}(x\cap\kappa)$ represents $\kappa$: the normal seed intersected with $j_U(\kappa)$ is $j_U``\kappa=\kappa$, and its order type is $\kappa$. Its coordinate values are below $\kappa$. Thus the desired value is the collapse of the class of $r(x)=\ell(\operatorname{otp}(x\cap\kappa))$. Put $T=\operatorname{TC}(\{\ell\})\cup\kappa\cup\{\varnothing\}$. This is transitive, contains all values of $r$, and has size at most $\kappa$ by step 1.1 and the union bound there. Every function $I\to T$ belongs to $M$ by closure. Their entire collection belongs to $M$ too: writing $\nu=|I|\ge\kappa$, its size is at most $\kappa^\nu\le(2^\nu)^\nu=2^\nu\le\mu$. Form the ordinary set quotient of these functions by coordinate $U$-equivalence. It and its coordinate membership relation are identical internally and externally. The relation is well-founded because a descending sequence would, by countable completeness, yield a descending membership sequence at one coordinate; AC supplies sequence representatives. It is extensional: for unequal function classes, on a large set their values differ, and choosing a member of their symmetric difference gives a distinguishing predecessor; transitivity of $T$ keeps that predecessor in this same quotient. Patching by empty gives every predecessor of every class from a function into $T$. F9's unique set collapse therefore agrees in both models and with the corresponding transitive part of the universe collapse. In particular the two evaluations of $[r]$ agree. This is an assertion about the collapse value, not equality of the two Scott representative codes. [step 2.2, step 1.1, F6, F7, F8, F9, F10, F12, F13]

4.1 Suppose this $\ell$ fails F1's requirement. A target set and requested cardinal witnessing failure give a cardinal $\theta\ge\kappa$ dominating both that cardinal and the hereditary size of that set. Any normal fine $\theta$-measure anticipating the set would give an embedding meeting the original request by F2, so there is a failure for some such $\theta$. Choose the least cardinal $\theta\ge\kappa$ for which some $x\in H_{\theta^+}$ is not anticipated by any normal fine measure on $P_\kappa(\theta)$. Choose $\mu$ as in step 2.2 and a $\mu$-supercompact embedding $j:V\to M$ by F2. Step 1.1 gives $j(\ell)\restriction\kappa=\ell$. Steps 2.2 and 3.1 show that $M$ computes exactly the same least failure $\theta$, including all candidate objects and every smaller cardinal. This is the required anticipation absoluteness, with a bound large enough to contain the measures themselves. [step 1.4, step 1.1, step 2.2, step 3.1, F1, F2, F10, F12]

5.1 Internally $j(\kappa)$ is inaccessible and $\theta<j(\kappa)$. Every candidate $x\in H_{\theta^+}^M$ belongs to $V_{j(\kappa)}^M$: its transitive closure has internal size at most $\theta$, and well-founded induction on that closure, using regularity of $j(\kappa)$, bounds the rank of each member below $j(\kappa)$. Consequently the transformed recursion at stage $\kappa$ excludes none of these failure witnesses by its range restriction or cutoff. It selects a failing object $a\in H_{\theta^+}$ and gives $j(\ell)(\kappa)=a$. The order $j(W)$ need not select any externally preselected witness; the argument only requires that its selected $a$ is a failure, which steps 2.2 and 3.1 make true externally too. [step 4.1, step 1.4, step 2.2, step 3.1, F5, F10]

6.1 Apply steps 1.3 and 2.1 to this $j$ at $\theta$, deriving a normal fine $\theta$-measure and its factor $j_0$, with $k\circ j_0=j$. The factor fixes $\kappa$ and $a$. Hence $$k(j_0(\ell)(\kappa))=j(\ell)(\kappa)=a=k(a).$$ Injectivity gives $j_0(\ell)(\kappa)=a$, contradicting the failure asserted in step 5.1. Thus no least failure exists. For arbitrary requested $\lambda\ge\kappa$ and arbitrary set $x$, choose $\theta\ge\lambda$ dominating its hereditary size. The resulting normal fine ultrapower anticipates $x$, moves $\kappa$ above $\theta$, and is $\theta$-closed, hence also $\lambda$-closed by padding sequences. This is precisely F1, including $x=\varnothing$ and $\lambda=\kappa$. All choice uses are set choices; no Global Choice or inaccessible existence beyond the given supercompact was assumed. [step 5.1, step 1.3, step 2.1, F1, F2, F10, F12] ∎
