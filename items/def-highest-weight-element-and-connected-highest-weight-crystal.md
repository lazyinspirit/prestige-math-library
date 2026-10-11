---
id: def-highest-weight-element-and-connected-highest-weight-crystal
kind: definition
title: "Highest weight elements, lowering-generated sets and highest weight crystals"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crystal-graph-epsilon-phi-and-weight, def-tensor-product-of-crystals, def-kashiwara-lattices-lambda-and-infinity, def-kashiwara-crystal-operators, def-kac-moody-integral-and-dominant-integral-weights]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Sami Assaf, Anne Dranowski and Nicolle Gonzalez, Extremal tensor products of Demazure crystals, arXiv:2210.10236"
      url: "https://arxiv.org/pdf/2210.10236"
      locator: "§2: 'In general, we say an element $b\\in B$ is highest weight if $E\\{b\\}=0$. A connected crystal $B$ is a highest weight crystal with highest weight $\\lambda$ if there exists a highest weight element $b_\\lambda$ of weight $\\lambda$ such that $B=F\\{b_\\lambda\\}$', followed by 'Note not every highest weight crystal with highest weight $\\lambda$ is isomorphic to $B(\\lambda)$'."
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.4.2-2.4.3: highest weight vectors of a connected crystal graph; Theorem 2.48 and Proposition 2.49."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed pp. 331-332, Lemma 13.3.0.10: every $b\\in B$ is $\\tilde F_{\\alpha_1}\\cdots\\tilde F_{\\alpha_r}b'$ for a highest vector $b'$, and $HW(B_\\lambda)\\ne\\emptyset$ only for dominant $\\lambda$."
---

## Definition

Let $B$ be a crystal, meaning the data $(B,wt,\varepsilon_i,\varphi_i,\tilde e_i,\tilde f_i)$ attached to a crystal basis or to a tensor product of such data ([[def-crystal-graph-epsilon-phi-and-weight]], [[def-tensor-product-of-crystals]]).

A vertex $b\in B$ is a **highest weight element** (a highest vertex, a maximal vector) of weight $\lambda\in P$ if $wt(b)=\lambda$ and $\tilde e_ib=0$ for every $i\in I$. The **lowering-generated set** of $b$ is

$$F(b):=\{\tilde f_{i_1}\cdots\tilde f_{i_r}b:\ r\ge0,\ i_1,\dots,i_r\in I\}\setminus\{0\},$$

the set of all nonzero iterated lowering images of $b$; it contains $b$ and is closed under nonzero images of every $\tilde f_i$. It need not be closed under raising: at the bottom $b$ of a two-vertex rank-one string, $F(b)=\{b\}$ while $\tilde e_i b$ is the top vertex. The **connected component** $C(b)$ of $b$ is the smallest subset of $B$ containing $b$ and closed under nonzero images of $\tilde e_i$ and $\tilde f_i$ for all $i$; by the partial-inverse axiom this is the connected component of the underlying coloured graph.

$B$ is a **highest weight crystal of highest weight $\lambda$** if $B$ has a highest weight element $b$ of weight $\lambda$ and $B=F(b)$.

The definition deliberately separates two conditions. Always $F(b)\subseteq C(b)$, and a highest vertex need not generate $B$: in a tensor product $B_1\otimes B_2$ a vertex with $\varepsilon_i(b_1)=0$ and $\varepsilon_i(b_2)\le\varphi_i(b_1)$ for all $i$ is highest while $B_1\otimes B_2$ is in general larger than its lowering-generated set (the companion page computes both cases). Conversely, for abstract crystals the two conditions do not determine $B$ up to isomorphism: the source literature records that not every connected crystal with a highest weight element of weight $\lambda$ is isomorphic to $B(\lambda)$. In this library crystals come from crystal bases of modules, and uniqueness for those is a theorem proved later on this page, not a consequence of this definition.

For the canonical objects, $B(\lambda)=\mathcal B(\lambda)$ denotes the crystal of the simple highest weight module $V(\lambda)=L(\lambda)$ ([[def-kashiwara-lattices-lambda-and-infinity]]) and $P^+$ the dominant integral labels ([[def-kac-moody-integral-and-dominant-integral-weights]]); that $B(\lambda)$ is a highest weight crystal of highest weight $\lambda$ is the next theorem. The operators $\tilde e_i,\tilde f_i$ used throughout are those of [[def-kashiwara-crystal-operators]]. No choice principle is used.
