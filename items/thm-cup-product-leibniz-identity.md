---
id: "thm-cup-product-leibniz-identity"
kind: "theorem"
title: "Cup product Leibniz identity"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cup-product-on-cochains","lem-additive-singular-cohomology-cross-product-is-well-defined"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Lemma 3.6; Miller Lecture 28
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For cochains $\varphi\in C^p(X;R)$ and $\psi\in C^q(X;R)$, $p,q\ge0$, over a commutative unital ring with positive coboundary,
$$\delta(\varphi\smile\psi)=\delta\varphi\smile\psi+(-1)^p\varphi\smile\delta\psi.$$
Thus the product of cocycles is a cocycle, and changing either cocycle representative by a coboundary changes their product by a coboundary.

## Facts & Assumptions

[F1] [[def-singular-cup-product-on-cochains]] defines $\varphi\smile\psi=J(\varphi,\psi)D_X$, with $D_X$ a chain map.

[F2] [[lem-additive-singular-cohomology-cross-product-is-well-defined]] proves $\delta J(\varphi,\psi)=J(\delta\varphi,\psi)+(-1)^pJ(\varphi,\delta\psi)$ on the signed tensor complex.

## Proof

**Given:** $X,R,p,q,\varphi,\psi$ as stated. Negative cochain degrees are zero, and $\delta^2=0$.

1.1 Since $D_X\partial=dD_X$, precomposing the tensor-functional identity with $D_X$ gives $$\delta(\varphi\smile\psi)=J(\varphi,\psi)D_X\partial=J(\varphi,\psi)dD_X=(J(\delta\varphi,\psi)+(-1)^pJ(\varphi,\delta\psi))D_X.$$ By the cup formula this is exactly the asserted identity. If both inputs are closed its right side is zero. [F1, F2, given]

2.1 Now assume $\delta\varphi=\delta\psi=0$. Let $u\in C^{p-1}(X;R)$ and $v\in C^{q-1}(X;R)$. Bilinearity expands the change to $(\varphi+\delta u)\smile(\psi+\delta v)-\varphi\smile\psi=\delta u\smile\psi+\varphi\smile\delta v+\delta u\smile\delta v$. Step 1.1, applied to each pair, identifies this as $$\delta\bigl(u\smile\psi+(-1)^p\varphi\smile v+u\smile\delta v\bigr).$$ Indeed the respective other Leibniz terms contain $\delta\psi$, $\delta\varphi$, or $\delta^2v$, and vanish. This proves simultaneous descent and, by setting $u=0$ or $v=0$, each separate descent. [F1, step 1.1, given]

3.1 If $p=0$, then $u=0$ and its two terms in the primitive are absent; if $q=0$, then $v=0$ and its terms are absent. For $p=q=0$ both representatives are unchanged, while the Leibniz identity itself still holds, with sign $+1$. At zero input or zero coefficient ring the equality is zero by bilinearity. An empty space has zero cochains, and a point or a degenerate simplex satisfies the same chain-map and tensor identities. No representative, basis, or primitive was chosen from an arbitrary family: the primitive is the displayed expression in the given $u,v$. Thus no AC is used. [F1, F2, step 1.1, step 2.1] ∎
