---
id: "lem-the-four-point-condition-implies-slim-triangles"
kind: "lemma"
title: "The four point condition implies slim triangles"
deps: ["lem-the-gromov-product-inequality-implies-the-four-point-condition"]
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
    - title: "Druţu–Kapovich Lemma 9.32; conservative two-inequality constant"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In a geodesic space satisfying the four-point condition with constant $\kappa\ge0$, every geodesic triangle is $4\kappa$-slim.

## Facts & Assumptions

**Given:** Such a space, specified sides of a triangle $(a,b,c)$, and $p\in[a,b]$.

[F1] The four-point hypothesis gives the product inequality with the same constant at every basepoint, by [[lem-the-gromov-product-inequality-implies-the-four-point-condition]].

## Proof

1.1 Write $\ell=d(a,b)$, $t=d(a,p)$ and $\alpha=(b|c)_a$. Suppose first that $t\le\alpha$. Since $\alpha\le d(a,c)$ there is $q\in[a,c]$ with $d(a,q)=t$. Products along a radial geodesic give $(p|b)_a=t$ and $(c|q)_a=t$. Applying the product inequality first through $b$, then through $c$, gives $(p|c)_a\ge t-\kappa$ and $(p|q)_a\ge t-2\kappa$. Hence $d(p,q)=2t-2(p|q)_a\le4\kappa$. [F1, given, algebra]

2.1 If $t\ge\alpha$, use $b$ as basepoint. Indeed $(a|c)_b=\ell-\alpha$ by expansion, and $d(b,p)=\ell-t\le\ell-\alpha$. The argument of step 1.1 with $a$ and $b$ interchanged gives a point on $[b,c]$ at distance at most $4\kappa$ from $p$. At $t=\alpha$ either construction works. [step 1.1, algebra]

3.1 Thus every point of $[a,b]$ is within $4\kappa$ of the other two sides; relabeling vertices proves this for all sides and all specified triangles. Zero side lengths require only $t=0$, and when $\kappa=0$ the produced point equals $p$. There were only finitely many segment choices. [step 1.1, step 2.1] ∎
