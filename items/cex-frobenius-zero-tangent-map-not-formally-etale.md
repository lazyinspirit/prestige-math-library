---
id: "cex-frobenius-zero-tangent-map-not-formally-etale"
kind: "counterexample"
title: "Zero Frobenius tangent map does not imply formal etaleness"
status: published
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
deps: ["lem-differential-of-morphism-via-cotangent-map", "thm-formally-unramified-differentials-zero", "def-formally-etale-morphism", "cor-jacobian-presentation-differentials", "lem-differentials-polynomial-algebra-free"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Morphisms 29.35.13 warning and 29.33"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
---

## Statement refuted

“A morphism of schemes over a field is formally etale whenever the induced map
on absolute differentials $\mathrm dF$ vanishes.”

## Counterexample

Let $k=\mathbb F_p$ and let $F\colon\mathbb A^{1}_{k}\to\mathbb A^{1}_{k}$ be
the absolute Frobenius, the endomorphism of $\operatorname{Spec}k[t]$ induced by
the $k$-algebra map $k[u]\to k[t]$, $u\mapsto t^{p}$; since $a^{p}=a$ for
$a\in\mathbb F_p$, the map is a morphism of $k$-schemes. Then
$$\mathrm dF\colon F^{*}\Omega_{\mathbb A^{1}_{k}/k}\longrightarrow \Omega_{\mathbb A^{1}_{k}/k}$$
sends the generator $1\otimes\mathrm du$ to
$\mathrm d(t^{p})=p\,t^{p-1}\mathrm dt=0$ and is therefore the zero map, yet the
**relative** module of the morphism is
$$\Omega_{\mathbb A^{1}_{k}/\mathbb A^{1}_{k},F} =\Omega_{k[t]/k[u]}\cong k[t]\,\mathrm dt\neq0,$$
so $F$ is not formally unramified and hence not formally etale. The vanishing of
$\mathrm dF$ concerns the two absolute modules over $k$; formal etaleness
concerns the relative module of the morphism, and the two must not be confused.

## Facts & Assumptions

**Given:** The field $k=\mathbb F_p$, the affine line $X=Y=\mathbb A^{1}_{k}=\operatorname{Spec}k[t]$ with coordinate ring $k[t]$, and the Frobenius morphism $F\colon X\to Y$ induced by the $k$-algebra map $k[u]\to k[t]$, $u\mapsto t^{p}$.

[F1] [[lem-differential-of-morphism-via-cotangent-map]]: for a morphism $f\colon X\to Y$ of $S$-schemes there is a unique $\mathcal O_X$-linear map $\mathrm df\colon f^{*}\Omega_{Y/S}\to\Omega_{X/S}$ with $1\otimes\mathrm d_{Y/S}(g)\mapsto\mathrm d_{X/S}(g\circ f)$; its fibre at $x$ has source the cotangent space at $f(x)$ extended to $\kappa(x)$, and its dual has the corresponding extended cotangent dual as target.

[F2] [[lem-differentials-polynomial-algebra-free]]: $\Omega_{k[t]/k}$ is free with basis $\mathrm dt$ and $\mathrm dg=g'(t)\,\mathrm dt$ for every $g\in k[t]$; in particular $\mathrm d(t^{p})=p\,t^{p-1}\mathrm dt$, which is $0$ over $k$ of characteristic $p$.

[F3] [[cor-jacobian-presentation-differentials]]: for a commutative ring $A$, $P=A[x]$ and $B=P/(f)$ one has $\Omega_{B/A}\cong B/(f')$, the cokernel of multiplication by the derivative, and no flatness or surjectivity of the presentation map is assumed.

[F4] [[thm-formally-unramified-differentials-zero]]: a morphism of schemes is formally unramified if and only if its sheaf of relative differentials vanishes; no finiteness hypothesis is imposed.

[F5] [[def-formally-etale-morphism]]: a morphism is formally etale exactly when it is formally smooth and formally unramified.

## Verification

1.1 The morphism $F$ is a morphism of $k$-schemes: the ring map $k[u]\to k[t]$ is the identity on $k=\mathbb F_p$, where every element satisfies $a^{p}=a$, so it is $k$-linear and corresponds to a morphism of $k$-schemes $\operatorname{Spec}k[t]\to\operatorname{Spec}k[u]$. [given]

1.2 The induced map on absolute differentials: by [F1] applied to $F$ over the base $S=\operatorname{Spec}k$, the map $\mathrm dF\colon F^{*}\Omega_{Y/k}\to\Omega_{X/k}$ sends $1\otimes\mathrm du$ to $\mathrm d_{X/k}(u\circ F)=\mathrm d(t^{p})$, and by [F2] one has $\mathrm d(t^{p})=p\,t^{p-1}\mathrm dt=0$ because $p=0$ in $k$. Since $\Omega_{Y/k}$ is free with basis $\mathrm du$ by [F2], the pullback is generated as an $\mathcal O_X$-module by $1\otimes\mathrm du$, so $\mathrm dF=0$; at every point $x$, its dual fibre map $T_{X/k,x}\to\operatorname{Hom}_{\kappa(x)}(\Omega_{Y/k,F(x)}\otimes_{\mathcal O_{Y,F(x)}}\kappa(x),\kappa(x))$ is zero. [F1, F2, given]

1.3 The relative module of the morphism: the ring $k[t]$ is the quotient of the polynomial algebra $k[u][v]$ in the variable $v$ by the single element $v^{p}-u$, under the identification $v=t$, since $t^{p}=u$ in the $k[u]$-algebra structure. Applying [F3] with $A=k[u]$, $P=k[u][v]$ and $f=v^{p}-u$ gives $\Omega_{k[t]/k[u]}\cong k[t]/(f')$ where $f'=p\,v^{p-1}=0$ in characteristic $p$; hence $\Omega_{k[t]/k[u]}\cong k[t]\cdot\mathrm dt$ is a free $k[t]$-module of rank one and, in particular, nonzero. [F3, given]

2.1 Consequence for the lifting properties: by [F4], the nonzero relative module of step 1.3 means that $F$ is not formally unramified; by [F5] a morphism that fails to be formally unramified is not formally etale. So although $\mathrm dF=0$ by step 1.2, the Frobenius is not formally etale; the failure is detected by $\Omega_{\mathbb A^{1}_{k}/\mathbb A^{1}_{k},F}\neq0$ and not by the zero map on absolute differentials. [F4, F5, step 1.3]

3.1 Consequently the displayed statement is false: the vanishing of the map induced on absolute differentials, and hence of the dual fibre map at every point, is not a criterion for formal etaleness, because it tests a different module from the relative one; the Frobenius of step 1.2 is the witness, with $\mathrm dF=0$ and $\Omega_{X/Y}\cong k[t]\mathrm dt\neq0$. [step 1.2, step 1.3, step 2.1] ∎
