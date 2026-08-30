---
id: thm-short-five-lemma-by-pullback-without-members
kind: theorem
title: "Short five lemma by pullback without members"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-short-exact-sequence-is-a-kernel-cokernel-pair,
       thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact,
       thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian,
       thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism,
       thm-an-abelian-category-is-balanced]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Mehrle, Category Theory, Part III, Lemma 7.23"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
    - title: "The Stacks Project, Section 12.5, Lemmas 12.5.12 and 12.5.13"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

For a morphism of short exact sequences in an abelian category, the three
conclusions of the short five lemma hold without using members: monic outer
maps force the middle map to be monic, epic outer maps force it to be epic, and
isomorphic outer maps force it to be an isomorphism.

## Facts & Assumptions

**Given:** A morphism of short exact sequences
$$0 \to A \xrightarrow{i} B \xrightarrow{p} C \to 0,$$
$$0 \to A' \xrightarrow{i'} B' \xrightarrow{p'} C' \to 0,$$
with vertical maps $f,g,h$.

[L1] In a short exact sequence, the left map is a kernel and the right map is a
cokernel ([[thm-a-short-exact-sequence-is-a-kernel-cokernel-pair]]).

[L2] The pullback square of an epimorphism is again a pullback square with epic
left projection, and its induced map on kernels is an isomorphism
([[thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism]]).

[L3] A cartesian square over an epimorphism is also cocartesian
([[thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian]]).

[L4] In an abelian category, monic-plus-epic implies isomorphism
([[thm-an-abelian-category-is-balanced]]).

## Pullback diagram

The proof uses the following pullback of $p'$ along $h$:

```tikzcd
P \arrow[r, "\beta"] \arrow[d, "\alpha"'] & B' \arrow[d, "p'"] \\
C \arrow[r, "h"'] & C'.
```

## Proof

**Proof technique:** direct.

1.1 Form the pullback of $p'$ along $h$ shown above. Because $p' g = h p$, there is a unique comparison map $u:B \to P$ with $\alpha u = p$ and $\beta u = g$. Since $p'$ is the cokernel of $i'$ by [L1], it is epic, so [L3] makes the square also cocartesian, and [L2] identifies $\ker(\beta)$ with $\ker(h)$. [L1, L2, L3, construct]

2.1 Assume $f$ and $h$ are monic. Then $\ker(h)=0$, so step 1.1 makes $\beta$ monic. If $u t = 0$, then $$p t = \alpha u t = 0.$$ Because $i=\ker(p)$ by [L1], there is $s$ with $t=i s$. Now $$0=\beta u t = g i s = i' f s.$$ The map $i'$ is monic by [L1], and $f$ is monic by hypothesis, so $s=0$ and hence $t=0$. Thus $u$ is monic, and therefore $$g=\beta u$$ is monic. [L1, step 1.1, assume-hyp, algebra]

2.2 Still with the pullback square of step 1.1, let $j:A' \to P$ be a kernel of $\alpha$; by [L2] this exists and agrees with the induced map from $\ker(p')=\operatorname{im}(i')$ to $P$. Assume now that $f$ and $h$ are epic. To show that $u$ is epic, let $t:P \to T$ satisfy $t u=0$. Then $$t j f = t u i = 0.$$ Since $f$ is epic, $t j = 0$. Because $j=\ker(\alpha)$, there is $r:C \to T$ with $r \alpha = t$. But then $$0=t u = r \alpha u = r p,$$ and $p$ is epic by [L1], so $r=0$ and hence $t=0$. Therefore $u$ is epic. [L1, L2, step 1.1, assume-hyp, algebra]

3.1 To show that $\beta$ is epic under the same hypotheses, let $s:B' \to T$ satisfy $s \beta = 0$. Since the square of step 1.1 is cocartesian by [L3], the compatible pair of maps $0:C \to T$ and $s:B' \to T$ induces a unique $v:C' \to T$ with $v h = 0$ and $v p' = s$. Because $h$ is epic, $v=0$, so $s=0$. Thus $\beta$ is epic, and therefore $$g=\beta u$$ is epic. [L3, step 1.1, step 2.2, algebra]

4.1 If $f$ and $h$ are isomorphisms, steps 2.1 and 3.1 show that $g$ is both monic and epic. Therefore [L4] makes $g$ an isomorphism. [L4, step 2.1, step 3.1]

5.1 This gives the short five lemma again, now by a pullback-and-pushout argument and without any use of members. [step 2.1, step 3.1, step 4.1] ∎
