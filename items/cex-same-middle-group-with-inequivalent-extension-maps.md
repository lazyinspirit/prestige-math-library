---
id: cex-same-middle-group-with-inequivalent-extension-maps
kind: counterexample
title: "The same middle group can support inequivalent extension maps"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement refuted

Two extensions are equivalent whenever their middle groups are isomorphic.

## Facts & Assumptions

**Given:** The middle group $E=C_9=\mathbb Z/9\mathbb Z$, the quotient map

$$\pi(\overline x)=\overline x \pmod 3,$$

and the two kernel embeddings

$$i_1(\overline a)=3\overline a,\qquad i_2(\overline a)=6\overline a.$$

[L1] The false statement above is the claim to be refuted ([[fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic]]).

## Counterexample

**Proof technique:** direct.

1.1 The map $\pi$ is surjective, with kernel $\{0,\overline3,\overline6\}$. Both $i_1$ and $i_2$ identify $C_3$ with that kernel, so $$ 1\to C_3\xrightarrow{i_1}E\xrightarrow{\pi}C_3\to1, \qquad 1\to C_3\xrightarrow{i_2}E\xrightarrow{\pi}C_3\to1 $$ are two extensions of $C_3$ by $C_3$ with the same middle group $E$. [given, algebra]

2.1 Any automorphism of $E=C_9$ has the form $\phi_u(\overline x)=u\overline x$ with $u\in(\mathbb Z/9\mathbb Z)^\times$. If an extension equivalence existed, it would satisfy $\phi\circ i_1=i_2$ and $\pi\circ\phi=\pi$. The first identity gives $3u\equiv6\pmod9$, so $u\equiv2\pmod3$. The second gives $u\equiv1\pmod3$. This contradiction shows that no extension equivalence can exist. [step 1.1, algebra]

3.1 Thus the same middle group supports two inequivalent extension structures, refuting [L1]. [L1, step 2.1] ∎
