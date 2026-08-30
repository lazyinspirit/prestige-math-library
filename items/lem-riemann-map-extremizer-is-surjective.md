---
id: lem-riemann-map-extremizer-is-surjective
kind: lemma
title: "An extremizer onto a proper subdomain of the disc can be enlarged"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-riemann-map-extremizer-is-univalent, def-homologically-simply-connected-complex-domain, thm-blaschke-factor-is-a-disc-automorphism, cor-holomorphic-roots-homologically-simply-connected-domains]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 5.2.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Let $\Omega\subsetneq\mathbb C$ be homologically simply connected, let
$z_0\in\Omega$, and let $f\in\mathcal F(\Omega,z_0)$ attain the extremal
derivative $M$. Then $f(\Omega)=\mathbb D$.

## Facts & Assumptions

**Given:** A proper homologically simply connected complex domain $\Omega\subsetneq\mathbb C$, a point $z_0\in\Omega$, and an extremizer $f\in\mathcal F(\Omega,z_0)$ with $f'(z_0)=M$.

[L1] The map $f$ is univalent ([[lem-riemann-map-extremizer-is-univalent]]).

[L2] For each $c\in\mathbb D$, the Blaschke factor $\varphi_c$ is a disc automorphism ([[thm-blaschke-factor-is-a-disc-automorphism]]).

[L3] On a homologically simply connected complex domain, every holomorphic nowhere-zero function has a holomorphic square root ([[cor-holomorphic-roots-homologically-simply-connected-domains]]).

## Proof

**Proof technique:** direct.

1.1 Assume toward a contradiction that $f(\Omega)\subsetneq\mathbb D$. Choose $c\in\mathbb D\setminus f(\Omega)$. Since $f(z_0)=0$, one has $c\ne0$. Put $\beta:=\varphi_c\circ f$. Then [L2] makes $\beta$ holomorphic and injective into $\mathbb D$, with $\beta(\Omega)\subset\mathbb D\setminus\{0\}$. [L1, L2, given, assume-contra, choose]

2.1 By [L3], the nowhere-zero holomorphic function $\beta$ has a holomorphic square root $q$ on $\Omega$ with $q^2=\beta$. If $q(z_1)=q(z_2)$ then $\beta(z_1)=\beta(z_2)$, so injectivity of $\beta$ gives $z_1=z_2$. If $q(z_1)=-q(z_2)$ then again $\beta(z_1)=\beta(z_2)$, so $z_1=z_2$ and then $q(z_1)=0$, impossible because $\beta$ never vanishes. Hence $q$ is injective. [L1, L3, step 1.1, algebra]

3.1 Let $a:=q(z_0)$, so $a^2=\beta(z_0)=\varphi_c(0)=c$. Define $g:=\varphi_a\circ q$. Then [L2] makes $g$ holomorphic and injective from $\Omega$ into $\mathbb D$, with $g(z_0)=0$. Thus after multiplying by a unimodular constant if needed, $g$ is another competitor in $\mathcal F(\Omega,z_0)$. [L2, step 2.1, construct]

4.1 Differentiate $q^2=\beta$ at $z_0$ to obtain $2a\,q'(z_0)=\beta'(z_0)=\varphi_c'(0)f'(z_0)=-(1-|c|^2)M$. Since $\varphi_a'(a)=-1/(1-|a|^2)$ and $|a|^2=|c|$, one gets $$|g'(z_0)|=\frac{1-|c|^2}{2|a|(1-|a|^2)}M=\frac{1+|c|}{2\sqrt{|c|}}M>M,$$ because $(1+|c|)/2>\sqrt{|c|}$ for $0<|c|<1$. This contradicts the extremal definition of $M$. [L2, step 3.1, algebra, discharge-contradiction]

5.1 Therefore the assumption of step 1.1 is false, so $f(\Omega)=\mathbb D$. [step 4.1] ∎
