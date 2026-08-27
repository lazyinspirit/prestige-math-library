---
id: lem-boundary-point-whose-complementary-component-contains-another-point-is-regular
kind: lemma
title: "A boundary point whose complementary component contains another point is regular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-weak-local-subharmonic-peak-function-implies-regularity, cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace, def-null-homologous-and-homologous-complex-cycles, thm-homological-simple-connectivity-equivalences, thm-conformal-invariance-of-plane-harmonicity]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\zeta\in\partial\Omega$. If the connected component of
$\widehat{\mathbb C}\setminus\Omega$ containing $\zeta$ also contains a second
point, then $\zeta$ is regular for $\Omega$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$, a boundary point $\zeta\in\partial\Omega$, and a second point in the same connected component of $\widehat{\mathbb C}\setminus\Omega$ as $\zeta$.

[L1] For a cycle, the index is locally constant off the trace and vanishes on every connected set in the zero-index region that meets infinity ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L2] A complex domain is homologically simply connected exactly when every cycle with trace in it is null-homologous there, equivalently when every holomorphic nowhere-zero function on it has a holomorphic logarithm ([[def-null-homologous-and-homologous-complex-cycles]], [[thm-homological-simple-connectivity-equivalences]]).

[L3] Harmonicity is preserved by holomorphic changes of coordinate ([[thm-conformal-invariance-of-plane-harmonicity]]).

[L4] A weak local subharmonic peak function implies regularity ([[lem-weak-local-subharmonic-peak-function-implies-regularity]]).

## Proof

**Proof technique:** direct.

1.1 Let $a\ne\zeta$ lie in the same connected component $E$ of $\widehat{\mathbb C}\setminus\Omega$ as $\zeta$, and let [given, construct] $$T(w)=\frac{w-\zeta}{w-a}.$$ This Möbius map sends $\zeta$ to $0$, sends $a$ to $\infty$, and maps $\Omega$ biholomorphically onto the domain $\Omega'=T(\Omega)$. Its image $E'=T(E)$ is a connected subset of $\widehat{\mathbb C}\setminus\Omega'$ containing both $0$ and $\infty$. Put $G=\widehat{\mathbb C}\setminus E'$. Then $G$ is an open connected neighbourhood of $\Omega'$ and $0\notin G$. [given, construct]

2.1 Let $\Gamma$ be any cycle whose trace lies in $G$. By [L1], the index $n(\Gamma,\cdot)$ is locally constant on $\mathbb C\setminus\Gamma^\ast$ and vanishes on the unbounded zero-index region. The connected set $E'\cap\mathbb C$ is disjoint from $\Gamma^\ast$, and because $E'$ also contains $\infty$, the local constancy from [L1] forces $n(\Gamma,p)=0$ for every $p\in E'\cap\mathbb C$. Since $E'=\widehat{\mathbb C}\setminus G$, this says exactly that $\Gamma$ is null-homologous in $G$ by [L2]. Therefore $G$ is homologically simply connected. [L1, L2, step 1.1]

2.2 Because $G$ is homologically simply connected and misses $0$, [L2] gives a holomorphic logarithm $L$ of the identity map on $G$, so $\exp(L(w))=w$ for $w\in G$. Hence [L2, step 1.1, construct] $$\operatorname{Re}L(w)=\log|w|.$$ Because $T(z)\to0$ as $z\to\zeta$ through $\Omega$ and $0\notin\Omega'$, choose a small neighbourhood $V$ of $0$ with $\Omega'\cap V\subseteq\{0<|w|<1\}$. On $\Omega'\cap V$ the function $$q(w)=\operatorname{Re}\frac1{L(w)}$$ is harmonic, negative, and tends to $0$ as $w\to0$ through $\Omega'$, because $\operatorname{Re}L(w)=\log|w|\to-\infty$. So $q$ is a weak local harmonic peak function at $0$ for the domain $\Omega'$. [L2, step 1.1, construct]

3.1 The composition $q\circ T$ is harmonic on $\Omega\cap T^{-1}(V)$ by [L3], is negative there, and tends to $0$ as $z\to\zeta$ through $\Omega$. Thus $q\circ T$ is a weak local subharmonic peak function at $\zeta$. Applying [L4] shows that $\zeta$ is regular for $\Omega$. [L3, L4, step 2.2] ∎
