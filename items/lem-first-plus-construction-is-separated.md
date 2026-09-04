---
id: lem-first-plus-construction-is-separated
kind: lemma
title: "The first plus construction is separated and preserves stalks"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-plus-construction, def-separated-presheaf, lem-equality-in-a-filtered-colimit-of-sets-is-eventual]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3, Section 4.7"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

Let $\mathcal F$ be a presheaf on a topological space $X$, and let
$\eta:\mathcal F\to\mathcal F^+$ be the canonical map of
[[def-presheaf-plus-construction]]. Then:

1. $\mathcal F^+$ is a separated presheaf.
2. For every $x\in X$, the induced map on stalks
   $$\eta_x:\mathcal F_x\longrightarrow(\mathcal F^+)_x$$
   is a bijection.

## Facts & Assumptions

**Given:** A presheaf $\mathcal F$ on $X$ and its plus construction
$\eta:\mathcal F\to\mathcal F^+$.

[F1] A section of $\mathcal F^+(U)$ is an equivalence class of germ-compatible
local presentations over $U$, and $\eta_U(s)$ is represented by the
single-chart presentation $(U,s)$ ([[def-presheaf-plus-construction]]).

[F2] A separated presheaf is one in which equality of sections can be checked on
an open cover ([[def-separated-presheaf]]).

[L1] Equality in a filtered colimit of sets is eventual at some smaller common
stage ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

## Proof

**Proof technique:** direct.

1.1 Let $\sigma,\tau\in\mathcal F^+(U)$ and suppose there is an open cover $U=\bigcup_{\alpha\in A}W_\alpha$ such that $\sigma|_{W_\alpha}=\tau|_{W_\alpha}$ for every $\alpha$. Fix $x\in U$, and choose $\alpha$ with $x\in W_\alpha$. Equality on $W_\alpha$ means that the two restricted presentations determine the same germ at $x$, so $\sigma$ and $\tau$ have the same germ at $x$. Since this holds for every $x\in U$, the two global presentations are equivalent by [F1]. Therefore $\sigma=\tau$, and $\mathcal F^+$ is separated by [F2]. [F1, F2]

1.2 To prove surjectivity of $\eta_x$, let $\xi\in(\mathcal F^+)_x$. Choose an open neighbourhood $U$ of $x$ and a section $\sigma\in\mathcal F^+(U)$ representing $\xi$. Pick a local presentation $(U_i,s_i)$ of $\sigma$ with $x\in U_i$ for some index $i$. Then on the neighbourhood $U_i$ the section $\sigma$ equals $\eta_{U_i}(s_i)$ by [F1], so the germ $\xi$ is the image of the germ of $s_i$ at $x$. Hence $\eta_x$ is surjective. [F1, given, choose]

1.3 Now suppose $\eta_x(a)=\eta_x(b)$ in $(\mathcal F^+)_x$, where $a\in\mathcal F_x$ and $b\in\mathcal F_x$. Represent $a$ and $b$ by sections $s\in\mathcal F(U)$ and $t\in\mathcal F(V)$ on neighbourhoods of $x$. By [L1], equality of their images in the stalk of $\mathcal F^+$ means that there exists an open neighbourhood $W\subseteq U\cap V$ of $x$ such that $$\eta_W(s|_W)=\eta_W(t|_W)\text{ in }\mathcal F^+(W).$$ By [F1], equality of these two single-chart classes says exactly that $s|_W$ and $t|_W$ have the same germ at every point of $W$, in particular at $x$. Thus $a=b$ in $\mathcal F_x$, so $\eta_x$ is injective. [F1, L1, given]

2.1 Steps 1.2 and 1.3 prove that every $\eta_x$ is bijective, and step 1.1 proves that $\mathcal F^+$ is separated. [step 1.1, step 1.2, step 1.3] ∎
