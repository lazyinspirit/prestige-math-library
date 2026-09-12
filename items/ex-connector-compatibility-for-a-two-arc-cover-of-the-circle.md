---
id: "ex-connector-compatibility-for-a-two-arc-cover-of-the-circle"
kind: "example"
title: "Connector compatibility for a two-arc cover of the circle"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem, Proposition 3.2, PDF p.6; statement corroboration only
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume $\mathrm{AC}_\omega$. Let $U=S^1\setminus\{[0]\}$ and $V=S^1\setminus\{[1/2]\}$, ordered as written, and write $U\cap V=W_0\sqcup W_1$ with $W_0=p((0,1/2))$ and $W_1=p((1/2,1))$. The overlap zero-cocycle $c$ equal to $1$ on $W_0$ and $0$ on $W_1$ maps under both Mayer–Vietoris connector routes to the same positive generator, evaluated as $1$ on the increasing circle cycle.

## Facts & Assumptions

**Given:** The ordered cover and overlap cocycle in the example.

[F1] [[lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors]] uses the second-minus-first difference, the form lift $(-\rho_Vc,\rho_Uc)$, and the singular lift $(-E_Uc,0)$, and proves that integration identifies their positive lift-differential connectors.

[F2] [[def-countable-choice]] is assumed exactly to obtain a smooth partition $\rho_U+\rho_V=1$ subordinate to this cover. With such a partition supplied, the calculation below is choice-free.

## Verification

1.1 Choose $a\in W_0$ and $b\in W_1$. Let $u$ be the increasing arc in $U$ from $a$ to $b$, and $v$ the increasing arc in $V$ from $b$ through the quotient seam to $a$; $z=u+v$ is the positively oriented circle cycle. For the de Rham lift set $\alpha=-\rho_Vc$ on $U$ and $\beta=\rho_Uc$ on $V$. Their difference on the overlap is $\beta-\alpha=(\rho_U+\rho_V)c=c$, and their derivatives glue to the connecting one-form $\zeta$. [F1, F2, given]

2.1 Since $\zeta=d\alpha$ on $U$ and $\zeta=d\beta$ on $V$, endpoint evaluation gives $$\int_z\zeta=\alpha(b)-\alpha(a)+\beta(a)-\beta(b).$$ At $b\in W_1$, $c(b)=0$, hence $\alpha(b)=\beta(b)=0$; at $a\in W_0$, $\beta(a)-\alpha(a)=c(a)=1$. Therefore $\int_z\zeta=1$. [step 1.1, algebra]

3.1 On the singular side use the lift $e_0=(-E_Uc,0)$ from [F1]. Its differential glues to the connector cocycle $z_0$. On $u:a\to b$, $$z_0(u)=\delta(-E_Uc)(u)=(-c(b))-(-c(a))=1,$$ while $z_0(v)=0$ on the $V$ lift. Thus $z_0(z)=1$, exactly the value in step 2.1, and [F1] identifies the two connector classes. [F1, step 1.1, step 2.1]

4.1 Replacing $c$ by $-c$ or reversing $z$ reverses both answers. The zero cocycle gives zero on both sides; if an overlap component were absent, this particular nonzero witness would not exist. Both endpoints of each arc occur in the displayed coboundary differences, and degenerate simplices contribute zero. Apart from [F2]'s partition existence, every lift, path, sign and evaluation is finite and explicit. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
