---
id: ex-skolems-construction-gives-the-fano-plane
kind: example
title: "The seven translates of $\\{0,1,3\\}$ form the Fano plane"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-steiner-systems-and-steiner-triple-systems, def-finite-projective-plane]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
---

## Example

On the point set $\mathbb Z/7$, consider the seven triples
$$\{0,1,3\},\ \{1,2,4\},\ \{2,3,5\},\ \{3,4,6\},\ \{4,5,0\},\ \{5,6,1\},\ \{6,0,2\},$$
that is, the translates of $\{0,1,3\}$ modulo $7$.

## Facts & Assumptions

**Given:** The seven triples displayed above.

[L1] A Steiner triple system is a $2$-$(v,3,1)$ design ([[def-steiner-systems-and-steiner-triple-systems]]).

[L2] A finite projective plane is a finite point-line incidence structure in which every two distinct points lie on exactly one line, every two distinct lines meet in exactly one point, every line contains at least three points, and there exist four points no three collinear ([[def-finite-projective-plane]]).

## Verification

**Proof technique:** direct.

1.1 Each displayed line has three points. [given]

2.1 Let $T:=\{0,1,3\}$. Its nonzero differences are $\pm1,\pm2,\pm3$, so every nonzero residue modulo $7$ occurs exactly once as $t_2-t_1$ with $t_1,t_2\in T$. Therefore any two distinct points of $\mathbb Z/7$ lie in exactly one translate of $T$. By [L1], the seven triples form a Steiner triple system on seven points. [step 1.1, L1, algebra]

3.1 The same difference calculation shows that any two distinct displayed lines meet in exactly one point. The four points $0,1,2,5$ contain no displayed line, so no three of them are collinear. Thus the same seven triples, read as lines, satisfy [L2]; every line has three points, so they form a finite projective plane of order $2$. This projective plane is the Fano plane. [step 2.1, L2, algebra] ∎
