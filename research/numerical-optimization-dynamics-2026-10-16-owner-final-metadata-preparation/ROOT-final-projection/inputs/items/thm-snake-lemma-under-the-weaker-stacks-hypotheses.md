---
id: thm-snake-lemma-under-the-weaker-stacks-hypotheses
kind: theorem
title: "Snake lemma under the weaker Stacks hypotheses"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-snake-data,
       def-kernels-and-cokernels-as-equalizers-and-coequalizers,
       thm-degenerate-exactness-criteria,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
       thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism,
       thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,
       def-exactness-at-a-node,
       thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism,
       thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.17(2)"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Lemma 7.24"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-24
---

## Statement

For snake data in the weaker Stacks shape

```tikzcd
X \arrow[r, "a"] \arrow[d, "\alpha"'] & Y \arrow[r, "b"] \arrow[d, "\beta"'] & Z \arrow[r] \arrow[d, "\gamma"'] & 0 \\
0 \arrow[r] & U \arrow[r, "k"'] & V \arrow[r, "l"'] & W,
```

there is an exact sequence
$$\ker(\alpha) \to \ker(\beta) \to \ker(\gamma) \xrightarrow{\delta} \operatorname{coker}(\alpha) \to \operatorname{coker}(\beta) \to \operatorname{coker}(\gamma).$$

If $a$ is monic, then $\ker(\alpha) \to \ker(\beta)$ is monic. If $l$ is epic,
then $\operatorname{coker}(\beta) \to \operatorname{coker}(\gamma)$ is epic.

## Facts & Assumptions

**Given:** The weaker snake-data diagram in the statement.

[L1] In an exact sequence ending in $0$, the last map is epic; in an exact sequence beginning at $0$, the first map is monic ([[thm-degenerate-exactness-criteria]]).

[L2] Kernels and cokernels are characterized by their universal properties ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L3] Pullbacks of epimorphisms are epimorphisms, and in a pullback square the induced map on kernels is an isomorphism ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]], [[thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism]]).

[L4] Under the endpoint hypotheses, the induced kernel and cokernel sequences are exact ([[thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses]]).

[L5] Exactness identifies images with kernels, and each morphism factors through its image by an epimorphism ([[def-exactness-at-a-node]], [[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

[L6] Epimorphisms are preserved by pullback; every image inclusion is a kernel of its cokernel, and dually every epimorphism is the cokernel of its kernel ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]], [[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Pullback diagram

The proof uses the pullback of $b$ along $k_\gamma$:

```tikzcd
P \arrow[r, "\pi'"] \arrow[d, "\pi"'] & Y \arrow[d, "b"] \\
K \arrow[r, "k_\gamma"'] & Z.
```

## Proof

**Proof technique:** direct.

1.1 Because the top row is exact and ends in $0$, the map $b$ is epic by [L1]. Because the bottom row is exact and begins at $0$, the map $k$ is monic by [L1]. Choose a kernel $k_\gamma:K\to Z$ of $\gamma$ and a cokernel $q_\alpha:U\to Q$ of $\alpha$. Form the pullback $P$ displayed above. By [L3], $\pi$ is epic. Since $$ l\beta\pi'=\gamma b\pi'=\gamma k_\gamma\pi=0, $$ the kernel property of $k$ gives a unique map $r:P\to U$ such that $$ kr=\beta\pi'. $$ [L1, L2, L3, given, construct]

2.1 Let $j:J\to P$ be a kernel of $\pi$. By [L3], the induced map $J\to\ker(b)$ is an isomorphism. Exactness of the top row at $Y$ says that $\ker(b)$ is the image of $a$, so there is an epimorphism $e:X\to J$ with $$ \pi' j e = a. $$ Then $$ krje=\beta\pi'je=\beta a=k\alpha, $$ and monicity of $k$ gives $rje=\alpha$. Therefore $$ q_\alpha r j e = q_\alpha \alpha = 0. $$ Because $e$ is epic, $q_\alpha r j=0$. Since $\pi$ is epic, [L6] makes it the cokernel of its kernel $j$, so there is a unique morphism $$ \delta:K\to Q $$ with $$ \delta\pi=q_\alpha r. $$ [L1, L2, L3, L6, step 1.1, construct, algebra]

3.1 Applying [L4] to the given diagram gives exactness of $$ \ker(\alpha)\to\ker(\beta)\to\ker(\gamma) $$ and of $$ \operatorname{coker}(\alpha)\to\operatorname{coker}(\beta)\to\operatorname{coker}(\gamma). $$ If $a$ is monic, then the sequence $0\to X\xrightarrow{a}Y\xrightarrow{b}Z$ is exact, so the same theorem gives that $\ker(\alpha)\to\ker(\beta)$ is monic. Dually, if $l$ is epic, then $\operatorname{coker}(\beta)\to\operatorname{coker}(\gamma)$ is epic. Thus only exactness at $\ker(\gamma)$ and at $\operatorname{coker}(\alpha)$ remains. [L1, L4, step 2.1]

3.2 Let $i:\ker(\beta)\to Y$ be a kernel of $\beta$, and let $s:\ker(\beta)\to K$ be the induced map with $k_\gamma s = b i$. Because $\beta i = 0$, the pair $(i,s)$ factors through the pullback, giving $t:\ker(\beta)\to P$ with $$ \pi' t=i,\qquad \pi t=s. $$ Then $$ kr t=\beta\pi' t=\beta i=0, $$ so monicity of $k$ gives $r t=0$. Therefore $$ \delta s=\delta \pi t=q_\alpha r t=0, $$ which proves that $\delta$ kills the image of $\ker(\beta)\to\ker(\gamma)$. [L2, step 2.1, construct, algebra]

3.3 Let $u:T\to K$ be a kernel of $\delta$. Pull back $\pi$ along $u$, obtaining an epimorphism $e_0:E_0\to T$ and $v:E_0\to P$ with $\pi v=ue_0$. Then $q_\alpha rv=\delta ue_0=0$. By [L5], $\operatorname{im}(\alpha)=\ker(q_\alpha)$, so $rv$ factors through the image inclusion of $\alpha$. Pull back the epic image projection $X\to\operatorname{im}(\alpha)$ along that factorization. This gives an epimorphism $e_1:E\to E_0$ and $x:E\to X$ with $\alpha x=rve_1$. [L5, L6, step 2.1, construct]

3.4 Let $q_\beta:V\to Q_\beta$ be a cokernel of $\beta$, and let $c:Q\to Q_\beta$ be induced by $k$, so $cq_\alpha=q_\beta k$. Since $kr=\beta\pi'$, one has $c\delta\pi=q_\beta kr=q_\beta\beta\pi'=0$, and epicity of $\pi$ gives $c\delta=0$. Let $t:R\to Q$ be a kernel of $c$. Pull back the epimorphism $q_\alpha:U\to Q$ along $t$, giving an epimorphism $d_0:D_0\to R$ and $v:D_0\to U$ with $q_\alpha v=td_0$. Then $q_\beta kv=ctd_0=0$, so $kv$ factors through $\operatorname{im}(\beta)=\ker(q_\beta)$. Pull back the epic image projection $Y\to\operatorname{im}(\beta)$ to obtain an epimorphism $d_1:D\to D_0$ and $y:D\to Y$ with $\beta y=kvd_1$. [L2, L5, L6, step 2.1, construct, algebra]

4.1 Put $z=\pi've_1-ax:E\to Y$. Since $\beta z=krve_1-k\alpha x=0$, it factors through a kernel $i:K_\beta\to Y$ of $\beta$ as $z=iw$. Let $s:K_\beta\to K$ be the induced arrow. Then $k_\gamma sw=biw=bz=b\pi've_1=k_\gamma ue_0e_1$. Monicity of $k_\gamma$ gives $sw=ue_0e_1$. Since $e_0e_1$ is epic, $\operatorname{coker}(s)u=0$. By [L6], $u$ factors through $\operatorname{im}(s)$; with $\delta s=0$ from step 3.2, this proves $\operatorname{im}(s)=\ker(\delta)$. [L2, L6, step 3.2, step 3.3, construct, algebra]

4.2 The square and bottom-row relation give $\gamma by=l\beta y=lkvd_1=0$. Thus $by$ factors through $k_\gamma:K\to Z$ as $by=k_\gamma x$ for a unique $x:D\to K$. The pair $(y,x)$ gives $w:D\to P$ with $\pi'w=y$ and $\pi w=x$. Since $krw=\beta y=kvd_1$ and $k$ is monic, $rw=vd_1$. Hence $\delta x=q_\alpha rw=q_\alpha vd_1=td_0d_1$. The composite $d_0d_1$ is epic, so $\operatorname{coker}(\delta)t=0$. By [L6], $t$ factors through $\operatorname{im}(\delta)$; together with $c\delta=0$, this proves $\operatorname{im}(\delta)=\ker(c)$. [L2, L6, step 1.1, step 3.4, construct, algebra]

5.1 The two central nodes are exact by steps 4.1 and 4.2; the other nodes and the endpoint clauses follow from step 3.1. Thus the stated sequence is exact. [step 3.1, step 4.1, step 4.2] ∎
