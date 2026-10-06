---
id: cex-sector-angle-changes-under-the-sign-convention
kind: counterexample
title: The sector changes under the sign convention
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-sectorial-operator-with-the-semigroup-sign-convention, def-complex-sector-and-bounded-analytic-semigroup, thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups, lem-exponential-series-of-a-bounded-operator, def-bounded-linear-operator, def-operator-norm, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Definition 2.18 and the remark on the opposite-sign convention, printed p. 56'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, Definition 4.1 and the sign discussion in the proof of Theorem 4.6, printed pp. 96 and 101-104'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

The statement "replacing $A$ by $-A$ preserves sectoriality at vertex $0$ and the sector
angle, merely inverting the generated semigroup" is false. Witness:
$X=\mathbb C$ and $A=1$. Then $\sigma(A)=\{1\}$, and
$1\in\Sigma_{\pi/2+\delta}$ for every $\delta>0$, so
$\Sigma_{\pi/2+\delta}\not\subseteq\rho(A)$ and $A$ is not sectorial in the
$e^{tA}$ convention
([[def-sectorial-operator-with-the-semigroup-sign-convention]]); the generated
semigroup is $e^{t}$, which is not bounded. However $-A=-1$ satisfies
$\Sigma_{\pi/2+\delta}\subseteq\rho(-A)=\mathbb C\setminus\{-1\}$ for every
$\delta<\pi/2$, with $\|R(\lambda,-A)\|=1/|\lambda+1|\le M_\varepsilon/|\lambda|$
on $\Sigma_{\pi/2+\delta-\varepsilon}$ where $M_\varepsilon=1/\sin\varepsilon$;
hence $-A$ is sectorial of angle $\pi/2$ and generates the bounded analytic
semigroup $e^{-t}$
([[thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups]]).
Thus sectoriality is an oriented condition located on the spectral side; the
dictionary of [[def-sectorial-operator-with-the-semigroup-sign-convention]] must
be applied to the operator that actually appears, and a signless citation of
"$A$ is sectorial" changes the sector by reflection through the origin.

**Refuted claim.** If $A$ is sectorial at vertex $0$ in the $e^{tA}$ convention then so is
$-A$, with the same sector angle, and the generated semigroup is merely
replaced by its inverse. The one-dimensional operator $A=1$ has $\sigma(A)=\{1\}$
inside every sector $\Sigma_{\pi/2+\delta}$, so it is not sectorial at vertex $0$,
while $-A=-1$ is sectorial of the maximal angle $\pi/2$ and generates the
contractive semigroup $e^{-t}$.

## Facts & Assumptions

**Given:** The one-dimensional complex Banach space $X=\mathbb C$, the bounded operators $A=1$ and $-A=-1$ acting as multiplication on $X$, and the open sectors $\Sigma_\gamma=\{\lambda\ne0:|\arg\lambda|<\gamma\}$.

[L1] $A$ is sectorial of angle $\delta\in(0,\pi/2]$ at vertex $\omega$ in the $e^{tA}$ convention when $\omega+\Sigma_{\pi/2+\delta}\subseteq\rho(A)$ with $\|R(\lambda,A)\|\le M_\varepsilon/|\lambda-\omega|$ on $\omega+\Sigma_{\pi/2+\delta-\varepsilon}$ for every $\varepsilon\in(0,\delta)$ ([[def-sectorial-operator-with-the-semigroup-sign-convention]]).

[L2] For a bounded operator $A\in\mathcal B(X)$ the series $E(t)=\sum_{n\ge0}t^nA^n/n!$ is a strongly continuous group of bounded operators whose generator is $A$, with $\|E(t)\|\le e^{|t|\|A\|}$ ([[lem-exponential-series-of-a-bounded-operator]], [[def-bounded-linear-operator]]).

[L3] The conditions (a)-(e) of the sectorial resolvent characterisation are equivalent, so a densely defined closed operator sectorial at vertex $0$ with a positive exponent generates a bounded analytic semigroup ([[thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups]], [[def-complex-sector-and-bounded-analytic-semigroup]]).

[L4] The operator norm is submultiplicative and $|R(\lambda,-1)|=1/|\lambda+1|$ in the one-dimensional space ([[def-operator-norm]]).

## Counterexample

**Proof technique:** direct.

1.1 The witness $A=1$ is not sectorial. In $X=\mathbb C$ the operator $\lambda I-A$ is multiplication by $\lambda-1$, which is invertible exactly for $\lambda\ne1$, so $\rho(A)=\mathbb C\setminus\{1\}$ and $\sigma(A)=\{1\}$; since $1\in\Sigma_{\pi/2+\delta}$ for every $\delta>0$, no sector with vertex $0$, $\Sigma_{\pi/2+\delta}$, is contained in $\rho(A)$ and [L1] rules out sectoriality at vertex $0$ of every positive exponent; moreover $A$ is bounded with $\|A\|=1$, so [L2] gives the generated semigroup $E(t)=e^{t}$ with $\|E(t)\|=e^{t}$, which is unbounded on $[0,\infty)$. [L1, L2, L4, given, algebra]

1.2 The reflected operator $-A=-1$ is sectorial of angle $\pi/2$. Here $\lambda I+A$ is multiplication by $\lambda+1$, invertible for $\lambda\ne-1$, so $\rho(-A)=\mathbb C\setminus\{-1\}$ and $R(\lambda,-A)=(\lambda+1)^{-1}$; the point $-1$ has argument $\pi$ while every $\lambda\in\Sigma_{\pi/2+\delta}$ has $|\arg\lambda|<\pi/2+\delta\le\pi$ for $\delta\le\pi/2$, so $-1\notin\Sigma_{\pi/2+\delta}$ and $\Sigma_{\pi/2+\delta}\subseteq\rho(-A)$; for $\lambda=re^{i\alpha}\in\Sigma_{\pi/2+\delta-\varepsilon}$ with $\varepsilon<\delta\le\pi/2$ one has $|\alpha|\le\pi/2+\delta-\varepsilon<\pi-\varepsilon$, hence $\cos|\alpha|\ge\cos(\pi-\varepsilon)=-\cos\varepsilon$ and $|\lambda+1|^2=r^2+2r\cos|\alpha|+1\ge r^2-2r\cos\varepsilon+1=(r\cos\varepsilon-1)^2+r^2\sin^2\varepsilon\ge r^2\sin^2\varepsilon$; hence $\|R(\lambda,-A)\|=1/|\lambda+1|\le M_\varepsilon/|\lambda|$ with $M_\varepsilon=1/\sin\varepsilon$, and [L1] makes $-A$ sectorial of angle $\pi/2$. [L1, L4, given, algebra]

2.1 The refutation. The two computations show that $A=1$ is not sectorial in the $e^{tA}$ convention while $-A=-1$ is sectorial of the endpoint angle $\pi/2$, so replacing $A$ by $-A$ does not preserve sectoriality or the sector angle; by [L3] the sectorial operator $-A$ generates a bounded analytic semigroup, which by [L2] is $t\mapsto e^{-t}$ with norm $e^{-t}\le1$, the inverse of the unbounded semigroup $e^{t}$ generated by $A$; the dictionary of [L1] therefore has to be applied to the operator that actually occurs, and the functions here are explicit, so no choice principle beyond Dependent Choice is used. [step 1.1, step 1.2, L1, L2, L3, given, algebra] ∎
