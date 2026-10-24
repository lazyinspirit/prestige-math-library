---
id: lem-qftx-coherent-analytic-module-calculus
kind: lemma
title: "Kernels, cokernels, and finite extensions of coherent module sheaves"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-qftx-analytic-coherent-module
  - def-kernel-cokernel-image-sheaves
  - def-exact-sequence-sheaves
  - thm-exactness-of-sheaves-stalkwise
dependency_roles:
  def-qftx-analytic-coherent-module: mathematical-premise
  def-kernel-cokernel-image-sheaves: mathematical-premise
  def-exact-sequence-sheaves: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joachim Wehler, Stein Manifolds, §4.3, Propositions 4.32 and 4.34"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
verification:
  precheck: pending
---

## Statement

Let $(X,\mathcal O_X)$ be a ringed space and use the coherence definition on the A page. The kernel and cokernel of any morphism between coherent $\mathcal O_X$-module sheaves are coherent. In every short exact sequence $0\to\mathcal F'\to\mathcal E\to\mathcal F''\to0$ of $\mathcal O_X$-module sheaves, if any two of $\mathcal F'$, $\mathcal E$, and $\mathcal F''$ are coherent, then the third is coherent.

## Statement references

[Wehler, §4.3, Proposition 4.32, printed pp. 148–151/PDF pp. 152–155](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

[Wehler, §4.3, Proposition 4.34, printed pp. 152–153/PDF pp. 156–157](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** A ringed space $(X,\mathcal O_X)$; an $\mathcal O_X$-module morphism $f:\mathcal F\to\mathcal G$ between coherent modules; and, for the extension assertion, a short exact sequence of $\mathcal O_X$-modules.

[F1] [[def-qftx-analytic-coherent-module]]: a coherent module is locally of finite type, and the kernel of every morphism from a finite-rank free module sheaf into it is locally of finite type.

[F2] [[def-kernel-cokernel-image-sheaves]]: kernels are objectwise; cokernel and image sheaves are the sheafifications of their sectionwise presheaves.

[F3] [[def-exact-sequence-sheaves]]: a short exact sequence has zero kernel at the left endpoint, image equal to kernel at the middle term, and zero cokernel at the right endpoint.

[F4] [[thm-exactness-of-sheaves-stalkwise]]: epimorphisms and exactness in the constructions below can be checked on stalks.

## Proof

1.1 Let $\mathcal F$ be coherent and fix $x\in X$. Local finite type gives, after choosing a neighborhood $U$ of $x$, a finite-rank free module sheaf map $\pi:\mathcal O_U^{\oplus k}\to\mathcal F|_U$ that is surjective on every stalk. By [F1], its kernel is locally of finite type; after shrinking to $V\subseteq U$, choose finitely many sections generating that kernel on $V$ and let $\rho:\mathcal O_V^{\oplus m}\to\mathcal O_V^{\oplus k}$ be the corresponding map. The sequence $\mathcal O_V^{\oplus m}\xrightarrow{\rho}\mathcal O_V^{\oplus k}\xrightarrow{\pi}\mathcal F|_V\to0$ is exact by [F2], [F3], and [F4]. Thus every coherent module has a local finite presentation. [F1, F2, F3, F4, given, construct]

2.1 Let $f:\mathcal F\to\mathcal G$ be a morphism of coherent modules and set $\mathcal K=\ker f$. Choose locally a finite-rank free epimorphism $\pi:\mathcal O^{\oplus k}\to\mathcal F$. The composite $f\pi:\mathcal O^{\oplus k}\to\mathcal G$ has a locally finite-type kernel by [F1]; its image under $\pi$ is exactly $\mathcal K$ on each stalk, since $\pi$ is stalkwise surjective. Hence $\mathcal K$ is locally of finite type by [F4]. For every finite-rank map $\eta:\mathcal O^{\oplus p}\to\mathcal K$, its composite with the inclusion $\mathcal K\hookrightarrow\mathcal F$ has the same kernel; [F1] for $\mathcal F$ makes that kernel locally of finite type. Thus $\mathcal K$ is coherent. [F1, F2, F4, step 1.1, given]

3.1 Let $\mathcal C=\operatorname{coker}f$. It is locally of finite type because it is a quotient of the locally finite-type module $\mathcal G$. To check its relation condition, fix a finite-rank map $\gamma:\mathcal O^{\oplus p}\to\mathcal C$ and a point $x$. Since $\mathcal G\to\mathcal C$ is a sheaf epimorphism, choose local lifts of the finitely many images of the standard basis near $x$; they define $\widetilde\gamma:\mathcal O^{\oplus p}\to\mathcal G$ lifting $\gamma$. Also choose a local finite-rank epimorphism $\delta:\mathcal O^{\oplus m}\to\mathcal F$. Define $\epsilon:\mathcal O^{\oplus(m+p)}\to\mathcal G$ by $\epsilon(a,b)=f(\delta(a))+\widetilde\gamma(b)$. By [F1], $\ker\epsilon$ is locally of finite type. Projection of $\ker\epsilon$ to the second factor has image exactly $\ker\gamma$ on every stalk: an element of $\ker\epsilon$ maps to zero in $\mathcal C$, and any stalk element $b\in\ker\gamma$ has $\widetilde\gamma(b)\in\operatorname{im}f$, so a stalk preimage under $\delta$ completes it to an element of $\ker\epsilon$. The image of a locally finite-type module is locally finite type, so $\ker\gamma$ is locally of finite type. This holds for every $\gamma$, hence $\mathcal C$ is coherent. [F1, F2, F4, step 1.1, construct]

4.1 Consider a short exact sequence $0\to\mathcal F'\xrightarrow{i}\mathcal E\xrightarrow{p}\mathcal F''\to0$. If $\mathcal E$ and $\mathcal F''$ are coherent, then $\mathcal F'=\ker p$ is coherent by step 2.1. If $\mathcal F'$ and $\mathcal E$ are coherent, then $\mathcal F''=\operatorname{coker}i$ is coherent by step 3.1. [F2, F3, step 2.1, step 3.1]

4.2 It remains to assume $\mathcal F'$ and $\mathcal F''$ coherent. Local finite generators of $\mathcal F'$ together with local lifts to $\mathcal E$ of finite generators of $\mathcal F''$ generate $\mathcal E$, so $\mathcal E$ is locally of finite type. For any finite-rank map $g:\mathcal O^{\oplus k}\to\mathcal E$, the kernel of $pg$ is locally of finite type by [F1] for $\mathcal F''$; choose a local finite-rank epimorphism $\gamma:\mathcal O^{\oplus m}\to\ker(pg)$. Exactness gives a map $\delta:\mathcal O^{\oplus m}\to\mathcal F'$ with $i\delta=g\gamma$. By [F1] for $\mathcal F'$, $\ker\delta$ is locally of finite type. On each stalk, $\gamma$ maps $\ker\delta$ onto $\ker g$: inclusion follows from $i\delta=g\gamma$, and if $s\in\ker g$, then $pg(s)=0$, so $s=\gamma(t)$ for some $t$ and $i\delta(t)=g(s)=0$; injectivity of $i$ gives $\delta(t)=0$. Therefore $\ker g$ is locally of finite type. Since this holds for every $g$, $\mathcal E$ is coherent. [F1, F2, F3, F4, step 4.1, algebra, construct] ∎

## Proof references

[[def-qftx-analytic-coherent-module]]

[[def-kernel-cokernel-image-sheaves]]

[[def-exact-sequence-sheaves]]

[[thm-exactness-of-sheaves-stalkwise]]

## Remarks

The extension case uses the exact sequence

```tikzcd
0 \arrow[r] & \mathcal F' \arrow[r,"i"] & \mathcal E \arrow[r,"p"] & \mathcal F'' \arrow[r] & 0
```

Here $i$ is the monomorphism and $p$ the epimorphism in the given sequence. The proof establishes finite generation of $\mathcal E$ and then its relation condition directly; the diagram only records the maps and exactness convention.
