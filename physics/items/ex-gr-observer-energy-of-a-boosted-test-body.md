---
id: ex-gr-observer-energy-of-a-boosted-test-body
kind: example
title: "Observer energy, spatial momentum and mass shell of a boosted test body"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-relative-energy-and-momentum, lem-gr-observer-energy-momentum-identities, ex-gr-observer-relative-velocity-of-a-boost, def-rational-power]
dependency_roles:
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  lem-gr-observer-energy-momentum-identities: mathematical-premise
  ex-gr-observer-relative-velocity-of-a-boost: mathematical-premise
  def-rational-power: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 on four-momentum, energy and the mass shell, printed pp. 26-28 (PDF pp. 33-35)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.3, equations (6.17)-(6.19) on P = m u, g(P,P) = -m^2 and observer energy, printed pp. 63-65 (PDF pp. 64-66)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Keep the setting of [[ex-gr-observer-relative-velocity-of-a-boost]]: the flat
metric $g$ on $\mathbb R^4$, the tetrad $(E_0,E_1,E_2,E_3)$, the observer
$n=E_0$, the parameters $\beta\in(-1,1)$, $\gamma=(1-\beta^2)^{-1/2}$, $c>0$,
and the future unit timelike vector $u=\gamma(E_0+\beta E_1)$ with
$g(u,u)=-1$ and $-g(n,u)=\gamma$. Let $m>0$ and set

$$P:=mc\,u.$$

Then $P$ is future timelike, its rest mass is $m(P)=m$, and relative to the
observer $n$ its energy and spatial momentum are

$$E_n(P)=mc^2\gamma,\qquad q_n(P)=mc\gamma\beta\,E_1,$$

so that $g(q_n(P),q_n(P))=m^2c^2\gamma^2\beta^2$ and the mass shell
$E_n(P)^2=m^2c^4+c^2g(q_n(P),q_n(P))$ holds. This is the standard boosted
test-body kinematics in the abstract observer split.

## Facts & Assumptions

**Given:** The flat metric $g$ and tetrad $(E_A)$ of the boosted-frame example, the observer $n=E_0$, parameters $\beta,\gamma,c$, the vector $u=\gamma(E_0+\beta E_1)$, a mass $m>0$, and the vector $P=mcu$.

[L1] $u$ is future unit timelike, $-g(n,u)=\gamma$, $h_n(u)=\gamma\beta E_1$, and $g(E_1,E_1)=1$ with $g(n,E_1)=0$ ([[ex-gr-observer-relative-velocity-of-a-boost]]).

[L2] For $P\in T_pM$ the observer energy and spatial momentum are $E_n(P)=-c\,g(P,n)$ and $q_n(P)=h_n(P)$; for $g(P,P)\le0$ the rest mass is $m(P)=\sqrt{-g(P,P)}/c\ge0$, and if $m(P)>0$ then $U(P)=P/m(P)$ satisfies $g(U(P),U(P))=-c^2$ ([[def-gr-observer-relative-energy-and-momentum]]).

[L3] If $P$ is future timelike with rest mass $m$, then with $u=P/(mc)$ and $\gamma=-g(n,u)$ one has $E_n(P)=mc^2\gamma$, $q_n(P)=mc\,h_n(u)$, $g(q_n(P),q_n(P))=m^2c^2(\gamma^2-1)$ and $E_n(P)^2=m^2c^4+c^2g(q_n(P),q_n(P))$ ([[lem-gr-observer-energy-momentum-identities]]).

[L4] For $a>0$ the nonnegative square root satisfies $(\sqrt a)^2=a$ and $\sqrt a>0$ ([[def-rational-power]]).

## Verification

**Proof technique:** direct.

1.1 Since $g(u,u)=-1$ by [L1], we get $g(P,P)=m^2c^2g(u,u)=-m^2c^2$, so $-g(P,P)=m^2c^2>0$; by [L4] and [L2] the rest mass is $m(P)=\sqrt{m^2c^2}/c=m$. In particular $P=mc\,u$ is future timelike and $P/(m(P)c)=u$. [L1, L2, L4, algebra]

2.1 By [L2] and [L1], $E_n(P)=-c\,g(mcu,n)=-mc^2g(u,n)=mc^2\gamma$ because $g(u,n)=-g(n,u)=-\gamma$; and $q_n(P)=h_n(P)=mc\,h_n(u)=mc\gamma\beta E_1$. [step 1.1, L1, L2, algebra]

3.1 Using $g(q_n(P),q_n(P))=m^2c^2\gamma^2\beta^2$ and $\gamma^2(1-\beta^2)=1$, we compute $E_n(P)^2-c^2g(q_n(P),q_n(P))=m^2c^4\gamma^2(1-\beta^2)=m^2c^4$, which is the mass shell relation of [L3]; equivalently $E_n(P)^2=m^2c^4+c^2g(q_n(P),q_n(P))$. The energy is positive because $m,c,\gamma>0$. [step 2.1, L1, L3, algebra] ∎

## Remarks

The example computes the same numbers as the elementary boost formula in an
inertial frame, but only through the observer split of a single tetrad: the
energy $mc^2\gamma$ and momentum $mc\gamma\beta$ are vector and scalar data in
$T_pM$ and its dual, not coordinate components. No measurement or empirical
claim is made; the physical reading of $E_n$ and $q_n$ belongs to the
framework's units and postulates.
