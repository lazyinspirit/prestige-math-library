---
id: def-zariski-braid-combing-words-alpha-and-x
kind: definition
title: "The Zariski combing words alpha_i and x_i in the Artin presentation"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-braid-group-by-the-artin-presentation,
       prop-stacking-of-geometric-braids-is-well-defined,
       thm-geometric-braids-form-a-group,
       prop-the-artin-presentation-surjects-onto-geometric-braids]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 3.1, printed pp. 19-20"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Fix $n\ge2$ and let
$B_n=\langle\sigma_1,\dots,\sigma_{n-1}\rangle$ be the **abstract braid group**
of [[def-braid-group-by-the-artin-presentation]], the group presented by the
generators $\sigma_1,\dots,\sigma_{n-1}$ and the relations

$$\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}\qquad(1\le i\le n-2),$$

$$\sigma_i\sigma_j=\sigma_j\sigma_i\qquad(1\le i,j\le n-1,\ |i-j|>1).$$

**Reading convention for words.** A word $w_1w_2\cdots w_m$ in this alphabet
and its inverses is *read first letter first*: it denotes the product
$[w_1][w_2]\cdots[w_m]$ in $B_n$, and under the published stacking convention
$[\gamma][\beta]:=[\gamma\star\beta]$ of
[[prop-stacking-of-geometric-braids-is-well-defined]] and
[[thm-geometric-braids-form-a-group]], in which the first factor of a stacking
is the *upper* one, its geometric image is the stacking
$w_1\star w_2\star\cdots\star w_m$ whose first factor is the topmost layer.
Here the geometric image is taken through the published surjection
$\varphi\colon B_n\to G_n$, $\varphi(\sigma_i)=[\sigma_i]$ of
[[prop-the-artin-presentation-surjects-onto-geometric-braids]]. In particular
the empty word is the identity of $B_n$. No injectivity or completeness of
$\varphi$ is asserted, and nothing below depends on how many factors the
stacking has.

**The words $\alpha_i$.** For $1\le i\le n-1$ put

$$\alpha_i:=\sigma_i\sigma_{i+1}\cdots\sigma_{n-1}\in B_n,\qquad\text{and}\qquad \alpha_n:=1,$$

the last being the empty word. Each $\alpha_i$ is a word of length $n-i$ in the
generators, and $\alpha_{n-1}=\sigma_{n-1}$.

**The words $x_i$.** For $1\le i\le n-1$ put

$$x_i:=\sigma_{n-1}^{-1}\cdots\sigma_{i+1}^{-1}\sigma_i^{2}\sigma_{i+1}\cdots\sigma_{n-1}=\alpha_{i+1}^{-1}\sigma_i^{2}\alpha_{i+1}\in B_n .$$

The two displayed words for $x_i$ are literally the same word written in two
ways: expanding $\alpha_{i+1}^{-1}$ gives
$\sigma_{n-1}^{-1}\cdots\sigma_{i+1}^{-1}$ and expanding
$\alpha_{i+1}$ gives $\sigma_{i+1}\cdots\sigma_{n-1}$, so the middle factor
$\sigma_i^{2}$ sits in the same position in both readings. In particular
$x_{n-1}=\sigma_{n-1}^{2}$, and $x_i$ is a word of length $2(n-i)$ in the
generators and their inverses.

These words are the **Zariski combing words** of the Artin presentation. The
definition is choice-free, it uses no relation of the presentation, and it
asserts no property of $\alpha_i$ or $x_i$ inside any geometric braid model;
all of that is established, when needed, by the items that cite this
definition.
