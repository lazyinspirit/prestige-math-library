---
id: "lem-infinite-order-elements-have-positive-stable-translation-length"
kind: "lemma"
title: "Infinite order elements have positive stable translation length"
deps: ["def-hg-toolkit-hyperbolic-group-and-stable-length", "prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite"]
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
    - title: "Hamann Proposition 5.2.5 pp.87–89, complete proof read"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every infinite-order element $g$ of a finitely generated hyperbolic group, the map $\mathbb Z\to G$, $n\mapsto g^n$, is a quasi-isometric embedding and $\tau_S(g)>0$. This proof is choice-free. In fact there is a positive integer $C$, depending only on the specified Cayley graph and its slimness constant, such that
$$ |g^n|_S\ge |n|/C\quad(n\in\mathbb Z),\qquad \tau_S(g)\ge1/C.$$

## Facts & Assumptions

**Given:** The specified finite-generator $\delta$-slim Cayley realization and an infinite-order element $g$.

[F1] The word metric conventions, power laws, subadditivity and the proved formula $\tau_S(g)=\lim_{n\to\infty}|g^n|_S/n=\inf_{n\ge1}|g^n|_S/n$ are given in [[def-hg-toolkit-hyperbolic-group-and-stable-length]].

[F2] Finite generating sets give finite word-metric balls by [[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]].

## Proof

1.1 Write $|h|=|h|_S$, put $a=\lceil2\delta+2\rceil$, let $B$ be the cardinality of $\{h:|h|\le a\}$, and set $C=B(2a+3)$. By F2 these are positive finite integers. Left translation is an isometry: on vertices $d(hx,hy)=|(hx)^{-1}hy|=|x^{-1}y|$, and it preserves labelled edge lengths, hence path distances. Since $g$ has infinite order, its positive powers are distinct and cannot all lie in a finite word ball. For any positive integer $R$, choose $k$ with $D=|g^k|>4R+8\delta+8$, choose a geodesic edge path $P$ from $e$ to $g^k$, and let $x$ be its vertex at distance $t=\lfloor D/2\rfloor$ from $e$. [F1, F2, given, algebra]

2.1 Suppose $|g^i|\le R$ for an integer $i$. The translated path $g^iP$ goes from $u=g^i$ to $v=g^{i+k}$, with midpoint vertex $y=g^ix$. Join $e$ to $u$ and $g^k$ to $v$ by geodesics of length at most $R$; the latter length equals $|g^i|$ by the power laws. Every point on either connector has distance at least $t-R$ from $y$, since distances of $y$ from the two ends of its translated path are $t$ and $D-t\ge t$. Here $t-R>2\delta+2$. Split the resulting quadrilateral by a diagonal. Applying slimness twice with approximate witnesses of error less than $1/2$ at each application shows that $y$ lies within distance less than $2\delta+1$ of one of the other three sides: if the first witness is on the diagonal, apply slimness to that witness in the other triangle and add the two distances. The connector lower bound excludes either connector. Thus there is a point on $P$ within $2\delta+1$ of $y$, and then a vertex $z\in P$ with $d(y,z)<2\delta+2\le a$. [step 1.1, given, algebra]

3.1 Since $d(u,y)=t$ and $d(e,u)\le R$, we have $|d(e,y)-t|\le R$. Consequently $|d(e,z)-t|\le R+a$. There are at most $2R+2a+1$ vertices of $P$ in this parameter range. Each has at most $B$ vertices at distance at most $a$, by translation invariance. All points $g^ix$ with $|g^i|\le R$ therefore lie in a set of at most $B(2R+2a+1)\le CR$ vertices, where the last inequality uses $R\ge1$. Distinct powers give distinct $g^ix$ by right cancellation. If every $i=0,1,\ldots,CR$ had $|g^i|\le R$, this would put $CR+1$ distinct vertices in a set of size at most $CR$, a contradiction. Thus some integer $f$ with $1\le f\le CR$ satisfies $|g^f|>R$. [step 1.1, step 2.1, F1, algebra]

4.1 Define $f_R$ to be the least such positive integer; this uses no choice function. The elementary upper bound $|g^{f_R}|\le f_R|g|$ gives $f_R>R/|g|$, where $|g|>0$ because $g$ has infinite order. Thus $f_R\to\infty$, whereas $$\frac{|g^{f_R}|}{f_R}>\frac{R}{f_R}\ge\frac1C.$$ F1's limit exists along all positive integers and therefore along these indices; it follows that $\tau_S(g)\ge1/C$. By F1's infimum formula, $|g^n|/n\ge\tau_S(g)\ge1/C$ for every positive $n$. Inversion gives the same inequality for negative integers, and $n=0$ gives equality zero. [step 3.1, F1, algebra]

5.1 For integers $m,n$, F1 gives $d(g^m,g^n)=|g^{n-m}|$. The lower bound in step 4.1 and the word-length upper bound give $$|n-m|/C\le d(g^m,g^n)\le |g|\,|n-m|.$$ Thus with $\lambda=\max\{1,C,|g|\}$ the power orbit is a $(\lambda,0)$-quasi-isometric embedding. Each use of slimness involved finitely many segments and approximate witnesses for one specified $R,i$; least-integer selection defined $f_R$. No Morse theorem, proper-ray compactness or AC was used. The constants remain valid for $\delta=0$, because $a\ge2$ throughout. [step 4.1, F1, algebra] ∎
