---
id: "def-restriction-from-continuous-to-smooth-singular-cochains"
kind: "definition"
title: "Restriction from continuous to smooth singular cochains"
deps: ["def-real-singular-cohomology", "def-smooth-singular-chain-and-cochain-complexes"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 19; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
---

## Definition

Let $M$ be a smooth manifold, possibly with boundary. The inclusion $I_M:C_\bullet^\infty(M;\mathbb R)\hookrightarrow C_\bullet(M;\mathbb R)$ is a chain map by [[def-smooth-singular-chain-and-cochain-complexes]]. Define the **restriction comparison** by
$$\rho_M^k:C^k(M;\mathbb R)\to C_\infty^k(M;\mathbb R),\qquad \rho_M^k(\varphi)=\varphi\circ I_M.$$
On each smooth simplex this retains exactly the original cochain value. It is real-linear and satisfies $\delta\rho_M\varphi=\varphi I_M\partial=\varphi\partial I_M=\rho_M\delta\varphi$. It therefore sends cocycles to cocycles and coboundaries to coboundaries, inducing $H^k(\rho_M):H^k_{\mathrm{sing}}(M;\mathbb R)\to H_\infty^k(M;\mathbb R)$ on the quotients in [[def-real-singular-cohomology]].

For a smooth map $f:M\to N$, both composites $f_\# I_M$ and $I_N f_\#^\infty$ send a smooth simplex $\sigma$ to $f\sigma$. Hence restriction commutes with pullbacks, on cochains and on their quotient classes. No choice of a smooth approximation is involved. Negative groups and empty-manifold groups are zero; on a point all simplices are smooth and $\rho$ is the identity in every nonnegative cochain degree. This definition does not yet assert that $H(\rho_M)$ is an isomorphism.
