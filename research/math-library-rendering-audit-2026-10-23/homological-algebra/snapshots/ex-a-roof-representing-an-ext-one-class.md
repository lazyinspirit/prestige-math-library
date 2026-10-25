---
id: "ex-a-roof-representing-an-ext-one-class"
kind: "example"
deps: ["thm-ext-is-hom-in-the-derived-category", "thm-higher-yoneda-ext-agrees-with-derived-ext"]
verification:
  audited: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.4.7 and 10.7.5, pp. 388, 400"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume Dependent Choice and supplied projective resolution data on $\mathbf{Ab}$, with $U$ below supplied for $\mathbb Z/2$, and set-sized Yoneda extension classes as in [F2]. The nonsplit extension $0\to\mathbb Z\xrightarrow2\mathbb Z\to\mathbb Z/2\to0$ is represented in $D(\mathbf{Ab})$ by the roof $\mathbb Z/2[0]\xleftarrow sU\xrightarrow f\mathbb Z[1]$, where $U=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $-1,0$, $s^0$ is reduction modulo two, and $f^{-1}=1$. Its class generates $\operatorname{Ext}^1(\mathbb Z/2,\mathbb Z)\cong\mathbb Z/2$.

## Facts & Assumptions

**Given:** Assume Dependent Choice and supplied projective resolution data on $\mathbf{Ab}$, with $U$ below supplied for $\mathbb Z/2$, and set-sized Yoneda extension classes as in [F2]. The nonsplit extension $0\to\mathbb Z\xrightarrow2\mathbb Z\to\mathbb Z/2\to0$ is represented in $D(\mathbf{Ab})$ by the roof $\mathbb Z/2[0]\xleftarrow sU\xrightarrow f\mathbb Z[1]$, where $U=(\mathbb Z\xrightarrow2\mathbb Z)$ in degrees $-1,0$, $s^0$ is reduction modulo two, and $f^{-1}=1$. Its class generates $\operatorname{Ext}^1(\mathbb Z/2,\mathbb Z)\cong\mathbb Z/2$.

[F1] In the projective construction of [[thm-ext-is-hom-in-the-derived-category]], a degree-one Hom cocycle $f:P\to N[1]$ on a projective resolution $s:P\to M[0]$ represents the derived morphism $Q(f)Q(s)^{-1}$ after the stated classical-to-cochain sign conversion; in degree one this multiplies the cocycle by $-1$.

[F2] The projective Yoneda-to-Ext comparison sends a short exact extension to the cocycle obtained by lifting its endpoint through a projective resolution ([[thm-higher-yoneda-ext-agrees-with-derived-ext]]).

## Verification

1.1 The complex $U$ has $H^{-1}=0$ and $H^0=\mathbb Z/2$, and $s$ induces the identity on this quotient. The map $f$ is a chain map because the target has only degree $-1$. Thus $s$ is a projective resolution of $\mathbb Z/2[0]$, and [F1] sends the cocycle $f$ to exactly the displayed roof. [F1, algebra]

2.1 The free resolution $U$ computes Ext: the degree-one Hom quotient is $\mathbb Z/2\mathbb Z$, and $f$ is the cocycle $1$. The lift used in [F2] for the displayed short exact sequence is the identity on the middle copy of $\mathbb Z$, so its terminal cocycle is this same $f$. The degree-one sign conversion in [F1] gives $-f$, but $f$ and $-f$ differ by the boundary $2f$ in this Hom quotient. Thus the displayed roof represents the extension class and is its nonzero generator. The extension cannot split because every homomorphism $\mathbb Z/2\to\mathbb Z$ is zero. [F1, F2, step 1.1, algebra] ∎
