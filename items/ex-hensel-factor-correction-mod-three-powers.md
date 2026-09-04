---
id: ex-hensel-factor-correction-mod-three-powers
kind: example
title: "A coprime factorisation lifted modulo three successive powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-coprime-factor-bezout-lift, lem-hensel-factor-correction-one-stage]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Example

Over $A=k\llbracket t\rrbracket$, consider
$$f(T)=T^2-T-t.$$
Modulo $t$ one has
$$\overline f=T(T-1),$$
and the two residue factors are coprime.

## Facts & Assumptions

**Given:** The polynomial $f(T)=T^2-T-t$ over $k\llbracket t\rrbracket$ with residue factorization $\overline f=T(T-1)$.

[L1] Coprime residue factors admit a lifted Bezout identity ([[lem-coprime-factor-bezout-lift]]).

[L2] One Hensel correction step raises the factorization by one power of the ideal ([[lem-hensel-factor-correction-one-stage]]).

## Verification

**Proof technique:** compute the correction terms explicitly.

1.1 Start with $g_1=T$ and $h_1=T-1$. Then $f-g_1h_1=-t$. A residue Bezout identity is $$1=1\cdot T+(-1)\cdot(T-1) \pmod t,$$ so [L1] applies. [L1, given, algebra]

2.1 Choose constant corrections $u_1=t$ and $v_1=-t$. Then $$u_1h_1+v_1g_1=t(T-1)-tT=-t=f-g_1h_1,$$ so $$g_2=T+t, \qquad h_2=T-1-t$$ satisfies $$g_2h_2=T^2-T-t-t^2 \equiv f \pmod{t^2}.$$ This is the first explicit correction step from [L2]. [L2, step 1.1, algebra]

3.1 Now $f-g_2h_2=t^2$. Choose $u_2=-t^2$ and $v_2=t^2$. Then $$u_2h_2+v_2g_2 \equiv -t^2(T-1)+t^2T=t^2 \pmod{t^3},$$ so $$g_3=T+t-t^2, \qquad h_3=T-1-t+t^2$$ satisfies $$g_3h_3 \equiv f \pmod{t^3}.$$ [L2, step 2.1, algebra]

4.1 Thus the factorization is lifted explicitly modulo $t$, modulo $t^2$, and modulo $t^3$. The computation makes the abstract correction lemma concrete. [step 2.1, step 3.1] ∎
