---
id: lem-riemann-map-extremal-family-is-nonempty
kind: lemma
title: "A proper homologically simply connected plane domain has a bounded univalent competitor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-map-extremal-family, def-homologically-simply-connected-complex-domain, cor-holomorphic-roots-homologically-simply-connected-domains, thm-blaschke-factor-is-a-disc-automorphism, thm-open-mapping-theorem-holomorphic-functions]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Lemma 5.2.5"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Let $\Omega\subsetneq\mathbb C$ be homologically simply connected and let
$z_0\in\Omega$. Then the extremal family $\mathcal F(\Omega,z_0)$ is nonempty.

## Facts & Assumptions

**Given:** A proper homologically simply connected complex domain $\Omega\subsetneq\mathbb C$ and a point $z_0\in\Omega$.

[L1] On a homologically simply connected complex domain, every holomorphic nowhere-zero function has a holomorphic square root ([[cor-holomorphic-roots-homologically-simply-connected-domains]]).

[L2] For each $a\in\mathbb D$, the Blaschke factor $\varphi_a$ is a biholomorphic self-map of $\mathbb D$ ([[thm-blaschke-factor-is-a-disc-automorphism]]).

[L3] A nonconstant holomorphic map on a domain has open image
([[thm-open-mapping-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Because $\Omega\subsetneq\mathbb C$, choose $a\in\mathbb C\setminus\Omega$. The function $z\mapsto z-a$ is holomorphic and nowhere zero on $\Omega$, so [L1] gives a holomorphic $q:\Omega\to\mathbb C$ with $q(z)^2=z-a$. [L1, given, choose]

2.1 If $q(z_1)=q(z_2)$ then $z_1-a=q(z_1)^2=q(z_2)^2=z_2-a$, so $z_1=z_2$; thus $q$ is injective. Also $0\notin q(\Omega)$, and $q(\Omega)\cap(-q(\Omega))=\varnothing$ because $q(z_1)=-q(z_2)$ would again force $z_1=z_2$, hence $q(z_1)=0$, impossible. [step 1.1, algebra]

3.1 Put $w_0:=q(z_0)$. Since $q$ is nonconstant, [L3] makes $q(\Omega)$ open, so choose $\rho>0$ with $D(w_0,\rho)\subseteq q(\Omega)$. Step 2.1 gives $q(\Omega)\cap(-q(\Omega))=\varnothing$, hence $$D(-w_0,\rho)=-D(w_0,\rho)\subseteq-q(\Omega)$$ is disjoint from $q(\Omega)$. Therefore $|q(z)+w_0|\ge\rho$ for every $z\in\Omega$. [L3, step 2.1, choose]

4.1 Define $$h(z):=\frac{\rho}{2(q(z)+w_0)}.$$ Step 3.1 gives $|h(z)|\le1/2$, so $h(\Omega)\subseteq\mathbb D$. The reciprocal affine map is injective away from $-w_0$, and step 2.1 makes $q$ injective, so $h$ is holomorphic and injective on $\Omega$. [step 2.1, step 3.1, algebra]

5.1 Let $b=h(z_0)\in\mathbb D$. By [L2], $g:=\varphi_b\circ h$ is holomorphic and injective from $\Omega$ into $\mathbb D$, and $g(z_0)=0$. Differentiating $q^2=z-a$ gives $q'(z_0)=1/(2w_0)\ne0$, so $g'(z_0)\ne0$. Multiplying by the unimodular constant $\overline{g'(z_0)}/|g'(z_0)|$ makes the derivative at $z_0$ positive. The resulting map lies in $\mathcal F(\Omega,z_0)$. [L2, step 1.1, step 4.1, algebra] ∎
