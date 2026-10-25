---
id: "thm-short-exact-two-open-singular-cochain-mayer-vietoris-sequence"
kind: "theorem"
title: "Short exact two open singular cochain mayer vietoris sequence"
deps: ["thm-short-exact-two-open-cover-small-singular-chain-sequence", "lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 9; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an ordered open cover $X=U\cup V$, put $C_{\mathrm{sm}}^k=\operatorname{Hom}_{\mathbb R}(C_k^{U,V}(X;\mathbb R),\mathbb R)$ with differential $\delta\lambda=\lambda\partial$. There is a short exact sequence of cochain complexes
$$0\longrightarrow C_{\mathrm{sm}}^\bullet\xrightarrow{a}C^\bullet(U;\mathbb R)\oplus C^\bullet(V;\mathbb R)\xrightarrow{b}C^\bullet(U\cap V;\mathbb R)\longrightarrow0,$$
where $a(\lambda)=(\lambda|_U,\lambda|_V)$ and $b(\varphi,\psi)=\psi|_{U\cap V}-\varphi|_{U\cap V}$. The first complex is the dual of cover-small chains; it is not the full cochain complex $C^\bullet(X;\mathbb R)$.

## Facts & Assumptions

**Given:** The ordered open cover $(U,V)$ of $X$.

[F1] The small-chain sequence has $i(c)=(-c,c)$, $j(a,b)=a+b$ and is exact with chain-map arrows ([[thm-short-exact-two-open-cover-small-singular-chain-sequence]]).

[F2] Degreewise zero extension $E_{U\cap V}^{U}$ is a linear section of restriction, without any cochain-map claim ([[lem-canonical-extension-by-zero-of-a-singular-cochain-on-a-simplex-basis]]).

## Proof

1.1 Since $i,j$ commute with boundary, precomposition by them commutes with coboundary. Their dual maps are exactly $a$ and $b$ with the displayed signs. Also $\delta^2\lambda=\lambda\partial^2=0$ on small chains, so the first term is a cochain complex, including zero groups in negative degrees. [given, F1, algebra]

2.1 If both restrictions of $\lambda$ vanish then $\lambda$ vanishes on every small generator, so $a$ is injective. A pair $(\varphi,\psi)$ is in $\ker b$ precisely when the functions agree on overlap simplices. Define $\lambda$ on a small simplex to be $\varphi$ on $U$ simplices and $\psi$ on the others. Agreement makes its restrictions the given pair. Extending by finite real sums gives a unique functional. Conversely restrictions of a single functional agree on the overlap, proving $\ker b=\operatorname{im}a$. [F1, step 1.1]

3.1 For $\eta\in C^k(U\cap V;\mathbb R)$, $b(-E_{U\cap V}^{U}\eta,0)=\eta$ by [F2], proving degreewise surjectivity with the required minus sign. This lift is not used as a cochain map. Empty opens or overlap give zero terms and the same formulas; if $U=V=X$, agreeing pairs are $(\lambda,\lambda)$ and $b(\varphi,\psi)=\psi-\varphi$. This includes a one-point space. The argument applies in degree zero, on repeated simplices, and on the zero groups in negative degrees, without any AC. [F2, step 1.1, step 2.1, algebra] ∎
