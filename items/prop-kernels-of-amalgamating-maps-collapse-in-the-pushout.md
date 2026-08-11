---
id: prop-kernels-of-amalgamating-maps-collapse-in-the-pushout
kind: proposition
title: "The kernels of the amalgamating maps are killed in the opposite canonical maps to a group pushout"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pushout-of-group-homomorphisms, thm-group-pushout-as-an-amalgamated-quotient, lem-group-homomorphism-basic-properties]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Statement

For a pushout of $f:K\to G$ and $h:K\to H$, $$i_H(h(\ker f))=\{e\},\qquad i_G(f(\ker h))=\{e\}.$$ Hence canonical factor maps in an arbitrary group pushout need not be injective. No equality with their full kernels is asserted.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Given homomorphisms $f:K\to G$ and $h:K\to H$ as in def-group-homomorphism, a **pushout** is a group $P$ with homomorphisms $i_G:G\to P$ and $i_H:H\to P$ such that $i_G\circ f=i_H\circ h$, and such that every compatible pair $u:G\to Q$, $v:H\to Q$ factors through a unique $w:P\to Q$ with $w\circ i_G=u$ and $w\circ i_H=v$. The maps $f,h$ need not be injective. ([[def-pushout-of-group-homomorphisms]]).

[L2] For homomorphisms $f:K\to G$ and $h:K\to H$, let $N$ be the normal closure in $G\ast H$ of $$\{j_G(f(k))j_H(h(k))^{-1}:k\in K\}.$$ Then $(G\ast H)/N$, with the induced factor maps $j_G$ and $j_H$, is a pushout of $f$ and $h$. ([[thm-group-pushout-as-an-amalgamated-quotient]]).

[L3] Let $G$ and $G'$ be groups with identities $e$ and $e'$, and let $f : G \to G'$ be a group homomorphism (def-group-homomorphism), so $f(xy) = f(x)f(y)$ for all $x, y \in G$. Then: 1. $f(e) = e'$; 2. $f(g^{-1}) = f(g)^{-1}$ for every $g \in G$; 3. $f(g^{n}) = f(g)^{n}$ for every $g \in G$ and every $n \in \mathbb{Z}$, powers being those of def-group-power. For **monoid** homomorphisms the analogue of claim 1 is false, so preservation of the identity has to be part of the definition: the map $u : \mathbb{Z} \to \mathbb{Z}$ with $u(x) = 0$ for every $x$ satisfies $u(xy) = u(x)u(y)$ for the multiplicative monoid $(\mathbb{Z},\cdot,1)$, yet $u(1) = 0 \ne 1$. ([[lem-group-homomorphism-basic-properties]]).

## Proof

**Proof technique:** direct.

1.1 If $k\in\ker f$, commutativity gives $i_H(h(k))=i_G(f(k))=i_G(e)=e$. [given, L1, L2, L3]

2.1 Interchanging $f$ and $h$ gives $i_G(f(\ker h))=\{e\}$. [step 1.1]

3.1 Therefore a nontrivial image of one kernel is killed by the opposite canonical map. This occurs, for example, for any nontrivial group $K$ with $G=1$, $H=K$, $f$ trivial, and $h=\mathrm{id}_K$: then $h(\ker f)=K$, so $i_H$ is not injective. This proves both the containments and the asserted possible failure. [step 2.1] ∎
