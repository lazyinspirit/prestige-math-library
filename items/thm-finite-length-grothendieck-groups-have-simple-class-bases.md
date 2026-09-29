---
id: thm-finite-length-grothendieck-groups-have-simple-class-bases
kind: theorem
title: "Simple classes freely generate the Grothendieck group of a length category"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-grothendieck-group-of-an-essentially-small-abelian-category
  - def-free-abelian-group
  - thm-grothendieck-group-universal-properties-and-functoriality
  - def-object-of-finite-length
  - thm-jordan-holder-theorem-in-an-abelian-category
  - def-abelian-category
  - cor-equalizers-are-monic-and-coequalizers-are-epic
  - def-composition-series-and-composition-factors-of-an-object
  - def-pullbacks-and-pushouts
  - def-simple-object
  - def-the-quotient-of-an-object-by-a-subobject
  - thm-every-monomorphism-is-the-kernel-of-its-cokernel
  - thm-the-pullback-of-an-epimorphism-is-an-epimorphism
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Charles Weibel, The K-book, Chapter II, Exercise 6.3"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Let $\mathcal C$ be an essentially small abelian category in which every object
has finite length. Let $\operatorname{Simp}(\mathcal C)$ be the set of
isomorphism classes of simple objects. The homomorphism

$$\Phi:\mathbb Z[\operatorname{Simp}(\mathcal C)]\longrightarrow G_0(\mathcal C),\qquad e_{[S]}\longmapsto[S],$$

is an isomorphism. For any object $M$ and simple object $S$, the coordinate of
$[M]$ under $\Phi^{-1}$ at $e_{[S]}$ is $[M:S]$, the number of composition
factors isomorphic to $S$ in a composition series of $M$.

## Facts & Assumptions

**Given:** An essentially small abelian category $\mathcal C$ in which every object has finite length. $G_0(\mathcal C)$ uses the short-exact-sequence relations.

[F1] $\operatorname{Iso}(\mathcal C)$ is a set, and $G_0(\mathcal C)$ is formed by imposing $[Y]=[X]+[Z]$ for every short exact sequence $0\to X\to Y\to Z\to0$ ([[def-grothendieck-group-of-an-essentially-small-abelian-category]]).

[F2] Every object of finite length admits a composition series ([[def-object-of-finite-length]]).

[F3] A composition series is a finite strict chain whose successive quotient objects are simple ([[def-composition-series-and-composition-factors-of-an-object]]).

[F4] Any two composition series of the same object have the same simple composition factors up to permutation and isomorphism ([[thm-jordan-holder-theorem-in-an-abelian-category]]).

[F5] A simple object is nonzero and has no subobjects other than zero and itself ([[def-simple-object]]).

[F6] Pullbacks are limits of cospans and have their usual universal property ([[def-pullbacks-and-pushouts]]).

[F7] The pullback of an epimorphism in an abelian category is epic ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[F8] Every epimorphism in an abelian category is the cokernel of its kernel ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

[F9] The quotient by a subobject is the cokernel of its representing monomorphism ([[def-the-quotient-of-an-object-by-a-subobject]]).

[F10] Any function on $\operatorname{Iso}(\mathcal C)$ that is additive on short exact sequences factors uniquely through $G_0(\mathcal C)$ ([[thm-grothendieck-group-universal-properties-and-functoriality]]).

[F11] A function from a set to an abelian group extends uniquely to a homomorphism from the free abelian group on that set ([[def-free-abelian-group]]).

[F12] Every coequalizer morphism, hence every cokernel morphism, is epic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal C$ is essentially small, $\operatorname{Iso}(\mathcal C)$ is a set by [F1]. Simplicity is invariant under isomorphism, so $\operatorname{Simp}(\mathcal C)\subseteq\operatorname{Iso}(\mathcal C)$ is a set. Put $F:=\mathbb Z[\operatorname{Simp}(\mathcal C)]$. The universal property of the free abelian group defines $\Phi:F\to G_0(\mathcal C)$ by $e_{[S]}\mapsto[S]$. [F1, F11, construct]

1.2 For $M\in\mathcal C$, choose a composition series $0=M_0<M_1<\cdots<M_n=M$. Define $[M:S]$ to be the number of indices $i$ for which $M_i/M_{i-1}\cong S$. By [F4], this number is independent of the chosen series and of the representative of $[M]$. Only finitely many factors occur, so $\mu([M]):=\sum_{[S]\in\operatorname{Simp}(\mathcal C)}[M:S]e_{[S]}$ is a well-defined finite-support element of $F$. Since this value is unique, no composition series is selected simultaneously for all isomorphism classes. [F2, F3, F4, construct]

1.3 The class function $[M]\mapsto\mu([M])$ is additive on short exact sequences. Indeed, take $0\to X\xrightarrow{i}Y\xrightarrow{p}Z\to0$ and composition series $0=X_0<\cdots<X_r=X$ and $0=Z_0<\cdots<Z_s=Z$. Regard the first series as a series in $Y$ through the kernel isomorphism $i:X\cong\ker p$. For each $j$, let $Y_j$ be the inverse-image subobject of $Z_j$ under $p$, formed by the pullback of $p$ along $Z_j\hookrightarrow Z$. Then $Y_0=i(X)$ and $Y_s=Y$. The projection $Y_j\to Z_j$ is epic by [F7]; composing it with the quotient epimorphism $Z_j\to Z_j/Z_{j-1}$ gives an epimorphism with kernel $Y_{j-1}$. The kernel assertion follows from the pullback universal property [F6]: a map into $Y_j$ is killed by the composite precisely when its $Z_j$-component factors through $Z_{j-1}$, which is precisely the defining property of $Y_{j-1}$. By [F8] this composite is a cokernel of $Y_{j-1}\hookrightarrow Y_j$, and by [F9] it therefore identifies $Y_j/Y_{j-1}\cong Z_j/Z_{j-1}$. These quotients are simple. Thus the chain $0=i(X_0)<\cdots<i(X_r)=Y_0<Y_1<\cdots<Y_s=Y$ is a composition series of $Y$, with the factors of the chosen $X$-series followed by those of the chosen $Z$-series. [F3, F6, F7, F8, F9, F12, construct, algebra]

2.1 The spliced series in step 1.3 has, for each simple $S$, exactly $[X:S]+[Z:S]$ factors isomorphic to $S$. Jordan-Hölder [F4] identifies these counts with the counts from any composition series of $Y$. Therefore $[Y:S]=[X:S]+[Z:S]$ for every simple $S$, so $\mu([Y])=\mu([X])+\mu([Z])$. If $X=0$ or $Z=0$, the corresponding series is empty and the same argument gives the endpoint identity. Only two finite composition series are chosen for this one sequence; no arbitrary-index choice is used. [F4, step 1.3, algebra]

3.1 By steps 1.2 and 2.1, $\mu$ is an additive class function on $\operatorname{Iso}(\mathcal C)$. The universal property [F10] gives a unique homomorphism $\overline\mu:G_0(\mathcal C)\to F$ with $\overline\mu([M])=\mu([M])$. [F10, step 1.2, step 2.1]

4.1 If $S$ is simple, then $0<S$ is a composition series with sole factor $S$ by [F5]. Hence $\overline\mu\Phi(e_{[S]})=e_{[S]}$ for every basis vector, so $\overline\mu\Phi=1_F$. [F5, step 1.1, step 3.1, algebra]

4.2 For a composition series $0=M_0<\cdots<M_n=M$, each short exact sequence $0\to M_{i-1}\to M_i\to M_i/M_{i-1}\to0$ gives $[M_i]=[M_{i-1}]+[M_i/M_{i-1}]$ in $G_0(\mathcal C)$ by [F1]. Since $[M_0]=[0]=0$, telescoping gives $[M]=\sum_{i=1}^n[M_i/M_{i-1}]=\Phi\overline\mu([M])$. The classes $[M]$ generate $G_0(\mathcal C)$, so $\Phi\overline\mu=1_{G_0(\mathcal C)}$. [F1, step 1.2, step 3.1, algebra]

5.1 Steps 4.1 and 4.2 show that $\Phi$ and $\overline\mu$ are inverse isomorphisms. If $\operatorname{Simp}(\mathcal C)$ is empty, every nonzero object would have a nonempty composition series with a simple first factor; thus every object is zero up to isomorphism, $F=0$, and the same inverse identities give $G_0(\mathcal C)=0$. For $M=0$, the empty composition series gives $\mu([0])=0$, consistent with $[0]=0$ from [F1]. The theorem is not an iff statement. [step 4.1, step 4.2, F1, F2, F3, F5, algebra] ∎
