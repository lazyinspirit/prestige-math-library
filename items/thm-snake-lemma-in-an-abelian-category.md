---
id: thm-snake-lemma-in-an-abelian-category
kind: theorem
title: "Snake lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-snake-data,
       thm-the-connecting-morphism-exists-and-is-unique,
       thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,
       def-exactness-at-a-node,
       thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
       thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.17(2)"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

For snake data

```tikzcd
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "f"'] & B \arrow[r, "p"] \arrow[d, "g"'] & C \arrow[r] \arrow[d, "h"'] & 0 \\
0 \arrow[r] & A' \arrow[r, "i'"'] & B' \arrow[r, "p'"'] & C' \arrow[r] & 0
```

there is an exact sequence
$$0 \to \ker(f) \to \ker(g) \to \ker(h) \xrightarrow{\delta} \operatorname{coker}(f) \to \operatorname{coker}(g) \to \operatorname{coker}(h) \to 0,$$
where $\delta$ is the connecting morphism of
[[thm-the-connecting-morphism-exists-and-is-unique]].

## Facts & Assumptions

**Given:** The snake-data diagram in the statement.

[L1] The connecting morphism exists and is unique ([[thm-the-connecting-morphism-exists-and-is-unique]]).

[L2] The kernel row is exact at its first two nodes, and the cokernel row is exact at its last two nodes ([[thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each]]).

[L3] Exactness identifies the image of one arrow with the kernel of the next ([[def-exactness-at-a-node]]).

[L4] Every morphism factors as an epimorphism followed by its image inclusion, and epimorphisms remain epic after pullback ([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]], [[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[L5] Every image inclusion is a kernel of the corresponding cokernel, and every monomorphism is the kernel of its cokernel ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the induced kernel row is exact at $\ker(f)$ and $\ker(g)$, and the induced cokernel row is exact at $\operatorname{coker}(g)$ and $\operatorname{coker}(h)$. It remains to prove exactness at $\ker(h)$ and $\operatorname{coker}(f)$. [L2, given]

1.2 Let $k_h:K\to C$ be a kernel of $h$, $q_f:A'\to Q$ a cokernel of $f$, and $q_g:B'\to Q_g$ a cokernel of $g$. Use the pullback $P=B\times_C K$ from [L1], with projections $\pi':P\to B$ and $\pi:P\to K$. That construction gives an epimorphism $\pi$, a map $a:P\to A'$ satisfying $i'a=g\pi'$, and $\delta:K\to Q$ satisfying $\delta\pi=q_fa$. Let $u:K_g\to K$ be the induced arrow from a kernel $k_g:K_g\to B$ of $g$, and let $c:Q\to Q_g$ be induced by $i'$. Thus $k_hu=pk_g$ and $cq_f=q_gi'$. [L1, construct]

2.1 The pair $(k_g,u)$ induces $s:K_g\to P$ with $\pi's=k_g$ and $\pi s=u$. Since $i'as=gk_g=0$ and $i'$ is monic, $as=0$. Consequently $\delta u=\delta\pi s=q_fas=0$. [step 1.2, construct, algebra]

2.2 Let $t:T\to K$ be a kernel of $\delta$. Pull back $\pi$ along $t$, obtaining $e_0:E_0\to T$ epic and $v:E_0\to P$ with $\pi v=te_0$. Then $q_fav=\delta te_0=0$. By [L3], $\operatorname{im}(f)=\ker(q_f)$, so $av$ factors through the image inclusion $m_f:I_f\to A'$. Factor $f=m_fe_f$ with $e_f:A\to I_f$ epic, and pull back $e_f$ along this factorization. The resulting $e_1:E\to E_0$ is epic and has a map $x:E\to A$ with $fx=ave_1$. [L3, L4, step 1.2, construct]

2.3 From $cq_f=q_gi'$ and $i'a=g\pi'$ one obtains $c\delta\pi=q_gi'a=q_gg\pi'=0$. Since $\pi$ is epic, $c\delta=0$. Now let $r:R\to Q$ be a kernel of $c$. Pull back the epimorphism $q_f:A'\to Q$ along $r$, obtaining an epimorphism $d_0:D_0\to R$ and $v:D_0\to A'$ with $q_fv=rd_0$. Then $q_gi'v=crd_0=0$, so $i'v$ factors through $\operatorname{im}(g)=\ker(q_g)$. Pull back the epic image projection $B\to\operatorname{im}(g)$ along this factorization. This gives an epimorphism $d_1:D\to D_0$ and $y:D\to B$ with $gy=i'vd_1$. [L3, L4, step 1.2, construct, algebra]

3.1 Put $z=\pi've_1-ix:E\to B$. Then $gz=i'ave_1-i'fx=0$, so $z=k_gw$ for a unique $w:E\to K_g$. Also $pz=p\pi've_1=k_hte_0e_1=k_huw$. Since $k_h$ is monic, $uw=te_0e_1$. The composite $e_0e_1$ is epic; hence $\operatorname{coker}(u)t=0$. By [L5], $t$ factors through $\operatorname{im}(u)$. Together with $\delta u=0$ from step 2.1, this gives $\operatorname{im}(u)=\ker(\delta)$. [L3, L5, step 1.2, step 2.1, step 2.2, construct, algebra]

3.2 The bottom-row relation gives $hpy=p'gy=p'i'vd_1=0$, so $py=k_hx$ for a unique $x:D\to K$. The pair $(y,x)$ induces $s:D\to P$, and $i'as=gy=i'vd_1$ implies $as=vd_1$ by monicity of $i'$. Thus $\delta x=q_fas=q_fvd_1=rd_0d_1$. Because $d_0d_1$ is epic, $\operatorname{coker}(\delta)r=0$, so [L5] makes $r$ factor through $\operatorname{im}(\delta)$. Along with $c\delta=0$, this proves $\operatorname{im}(\delta)=\ker(c)$. [L3, L5, step 1.2, step 2.3, construct, algebra]

4.1 The two remaining nodes are exact by steps 3.1 and 3.2; the other nodes are exact by step 1.1. Therefore the snake sequence is exact. [step 1.1, step 3.1, step 3.2] ∎
