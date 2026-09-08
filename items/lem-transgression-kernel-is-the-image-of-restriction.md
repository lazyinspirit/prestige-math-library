---
id: lem-transgression-kernel-is-the-image-of-restriction
kind: lemma
title: "The kernel of transgression is the image of restriction"
status: published
origin: pipeline
deps: [def-low-degree-transgression-for-a-group-extension, thm-degree-one-inflation-restriction-exact-sequence, lem-bar-two-cocycles-classify-abelian-kernel-extensions, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
---

## Statement

Assume AC. With the displayed crossed-map and transgression conventions,
$$\ker(\operatorname{Tra}:H^1(N,A)^Q\to H^2(Q,A^N))=\operatorname{im}(\operatorname{res}:H^1(G,A)\to H^1(N,A)^Q).$$
Cohomology is the normalized bar theory, with its inherited derived interpretation.

## Facts & Assumptions

**Given:** AC, the extension, A and [d] in the invariant H1 group.

[F1] Transgression is the extension $L_d/D_d$ with kernel $A^N$ ([[def-low-degree-transgression-for-a-group-extension]]).

[F2] Restriction is defined into invariant H1 and its image has the stated crossed-map interpretation ([[thm-degree-one-inflation-restriction-exact-sequence]]).

[F3] The class of an extension is zero if and only if it has a homomorphic section ([[lem-bar-two-cocycles-classify-abelian-kernel-extensions]]).

## Proof

1.1 If d is the restriction of a global crossed map c, its graph $C=\{(c(g),g)\}$ is a subgroup of $A\rtimes G$ and $C\cap(A\rtimes N)=D_d$. The latter is normal in C because N is normal in G. Thus $C\subseteq L_d$, and $C/D_d\cong Q$ is a subgroup of $L_d/D_d$ meeting the kernel $A^N$ trivially and mapping onto Q. It gives a homomorphic section. Therefore Tra[d]=0. If only the cohomology classes agree, replace the restriction by its principal-equivalent representative; F1 says Tra is unchanged. [F1, F2, F3, given, algebra]

2.1 Conversely if Tra[d]=0, let $\bar C\le L_d/D_d$ be the image of a splitting, supplied by F3. Take its full inverse image C in $L_d$. It contains $D_d$. It meets A trivially: an element of $C\cap A$ lies in $A^N$ by F1 and has class in $\bar C\cap A^N=1$, so lies in $D_d\cap A=1$. The projection $C\to G$ is onto: given g, select one member of C whose projection has quotient pi(g), then multiply it by the unique element of $D_d$ correcting its projection to g. This is an elementwise existence proof, not a family of selections. Hence $C\to G$ is an isomorphism and its inverse is the graph of a uniquely defined function c:G to A. The subgroup law gives $c(gh)=c(g)+gc(h)$, and $C\cap(A\rtimes N)=D_d$ gives $c|_N=d$. Thus [d] is in the restriction image. [F1, F3, step 1.1, algebra] ∎
