---
id: "lem-hg-toolkit-finitely-many-cayley-cone-types"
kind: "lemma"
title: "Hg toolkit finitely many cayley cone types"
deps: ["def-hg-toolkit-hyperbolic-group-and-stable-length", "prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite", "lem-slim-triangles-imply-the-gromov-product-inequality"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Hamann Proposition 5.2.3 pp.85–87; complete proof"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a finite generating set $S$ of a hyperbolic group, there are only finitely many geodesic cone types
$$\mathcal C(g)=\{h\in G:|gh|_S=|g|_S+|h|_S\}.$$
More precisely, with a slimness constant $\delta\ge0$, set $r=\max\{1,\lceil12\delta\rceil\}$. The finite-set datum
$$P_r(g)=\{h:|h|_S\le r,\ |gh|_S\le|g|_S\}$$
determines $\mathcal C(g)$, so at most $2^{|\{h:|h|_S\le r\}|}$ cone types occur.

## Facts & Assumptions

**Given:** The standing finite-generator geometric hyperbolicity convention of [[def-hg-toolkit-hyperbolic-group-and-stable-length]]; write $|x|=|x|_S$.

[F1] Finite generating sets have finite word-metric balls by [[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]].

[F2] The product condition holds with $\kappa=3\delta$ by [[lem-slim-triangles-imply-the-gromov-product-inequality]].

## Proof

1.1 We first derive the radial bound needed below. For specified geodesics $[o,x],[o,y]$, suppose $0\le t\le(x|y)_o$, and let $x_t,y_t$ be their radius-$t$ points. They exist since products do not exceed either radial length. We have $(x_t|x)_o=t$ and $(y|y_t)_o=t$. Apply F2 through the chain $x_t,x,y,y_t$: two product inequalities give $(x_t|y_t)_o\ge t-2\kappa$. Hence $d(x_t,y_t)=2t-2(x_t|y_t)_o\le4\kappa=12\delta$. This calculation includes $t=0$ and $\delta=0$. [F2, given, algebra]

1.2 Fix $g,g'$ with $P_r(g)=P_r(g')$. The identity lies in both cones. If $|h|=1$ and $h\in\mathcal C(g)$, then $h\notin P_r(g)$ and hence $h\notin P_r(g')$. Thus $|g'h|>|g'|$, while $|g'h|\le|g'|+1$. Integral word lengths force equality, proving $h\in\mathcal C(g')$. [given, algebra]

2.1 Induct on $l=|h|\ge2$, assuming cone membership transfers for shorter elements. If $h\in\mathcal C(g)$, take a shortest spelling $h=h's$ with $|h'|=l-1$ and $|s|=1$. The inequalities $|g|+l=|gh|\le|gh'|+1\le|g|+l$ force $h'\in\mathcal C(g)$; hence $|g'h'|=|g'|+l-1$ by induction. Suppose for a contradiction that $h\notin\mathcal C(g')$. Writing $A=|g'|$, the endpoint $g'h$ has length between $A+l-2$ and $A+l-1$, by its distance $1$ from $g'h'$ and the failed cone equality. In particular its length is at least $A$. [step 1.2, given, algebra]

3.1 Choose the geodesic from $e$ through $g'$ to $g'h'$ provided by the equality in step 2.1, and any geodesic from $e$ to $g'h$. Their endpoints have distance $1$ and product at least $((A+l-1)+(A+l-2)-1)/2=A+l-2\ge A$. Let $k_1$ be the vertex at radius $A$ on the second geodesic, and put $k_2=k_1^{-1}g'h$. The vertex exists because its length is at least $A$. Step 1.1 gives $|g'^{-1}k_1|=d(g',k_1)\le12\delta\le r$. Also $|k_1|=A$ and $|k_2|=|g'h|-A\le l-1$. Set $v=g'^{-1}k_1$. Then $v\in P_r(g')=P_r(g)$, so $|gv|\le|g|$. [step 1.1, step 2.1, given, algebra]

4.1 Since $h=vk_2$, we obtain $|g|+l=|gh|\le|gv|+|k_2|\le|g|+l-1$, a contradiction. This proves $\mathcal C(g)\subseteq\mathcal C(g')$ by induction. Interchanging $g,g'$ proves equality. The finite-radius set in the statement is finite by F1 (it is contained in the open radius-$r+1$ ball), so has finitely many subsets, at most $2$ to its cardinality. Each possible $P_r(g)$ determines just one cone, establishing finiteness and the stated count. Only finitely many geodesics are chosen for each specified inductive comparison; no AC is used. [step 3.1, F1, algebra] ∎
