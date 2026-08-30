---
id: cor-bieberbach-second-coefficient-bound
kind: corollary
title: "The second coefficient of a normalized univalent function has modulus at most two"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normalized-univalent-class, thm-area-theorem-for-exterior-univalent-functions, prop-star-shaped-plane-domains-are-homologically-simply-connected, cor-holomorphic-roots-homologically-simply-connected-domains]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Corollary 7.5.5 and Theorem 7.5.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.13"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

If

$$f(z)=z+a_2z^2+a_3z^3+\cdots$$

lies in $\mathcal S$, then $|a_2|\le2$.

## Facts & Assumptions

**Given:** A function $f(z)=z+a_2z^2+a_3z^3+\cdots\in\mathcal S$.

[L1] The area theorem applies to univalent functions of the form $z^{-1}+\sum_{n\ge1}b_nz^n$ on the punctured disc ([[thm-area-theorem-for-exterior-univalent-functions]]).

[L2] The unit disc is star-shaped and therefore homologically simply connected ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[L3] A nowhere-zero holomorphic function on such a domain has a holomorphic square root ([[cor-holomorphic-roots-homologically-simply-connected-domains]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is injective and $f(0)=0$, the only zero of $f$ in $\mathbb D$ is $0$. Hence $$F(z):=\frac{f(z^2)}{z^2}=1+a_2z^2+a_3z^4+\cdots$$ extends holomorphically and nowhere vanishingly to $\mathbb D$. By [L2] and [L3], choose a holomorphic square root $q$ on $\mathbb D$ with $q(z)^2=F(z)$ and $q(0)=1$. [L2, L3, given, algebra]

2.1 Put $h(z):=zq(z)$. Then $h(z)^2=f(z^2)$. The function $h$ is odd and univalent: if $h(z_1)=h(z_2)$ then $f(z_1^2)=f(z_2^2)$, so $z_1^2=z_2^2$; if $z_1=-z_2\ne0$, oddness gives $h(z_1)=-h(z_2)$, contradiction. Thus $$h(z)=z+\frac{a_2}{2}z^3+\cdots.$$ [step 1.1, algebra]

3.1 Define $$G(\zeta):=\frac1{h(\zeta)}=\frac1\zeta-\frac{a_2}{2}\zeta+\cdots\qquad(0<|\zeta|<1).$$ Since $h$ is injective on $\mathbb D$ and vanishes only at $0$, the map $G$ is holomorphic and injective on the punctured disc. Fact [L1] therefore applies and yields $$\left|\frac{a_2}{2}\right|^2\le1.$$ [L1, step 2.1, algebra]

4.1 Therefore $|a_2|\le2$. [step 3.1] ∎
