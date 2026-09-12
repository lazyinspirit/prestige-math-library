---
id: "cor-smooth-functions-are-weakly-dense-in-distributions"
kind: "corollary"
title: "Smooth functions are weakly dense in distributions"
deps: ["thm-mollifier-approximation-in-distributions", "lem-test-function-cutoffs-and-euclidean-localization", "thm-heine-borel-rn", "thm-extension-by-zero-for-distributions-with-ambient-closed-support", "def-countable-choice", "def-multiplication-of-a-distribution-by-a-smooth-function", "thm-convolution-with-a-test-function-is-smooth", "def-support-of-a-distribution", "thm-locally-integrable-functions-embed-in-distributions", "lem-distribution-pairing-with-smooth-parameter-families", "cor-change-of-variables-for-compactly-supported-functions", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "thm-local-finite-order-characterization-of-distributions"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume Countable Choice for Lebesgue integration. For every integer $n\ge1$, every open $\Omega\subseteq\mathbb R^n$, and every $u\in\mathcal D'(\Omega)$, there is a sequence $f_j\in\mathcal D(\Omega)$ whose regular distributions converge weakly to $u$. In particular smooth regular distributions are weakly dense in $\mathcal D'(\Omega)$.

## Facts & Assumptions

[F1] For each compact $K\subseteq\Omega$ there is a cutoff $\chi\in\mathcal D(\Omega)$ equal to one near $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]). In $\mathbb R^n$, closed bounded sets are compact ([[thm-heine-borel-rn]]).

[F2] Smooth multiplication defines $\chi_j u$ ([[def-multiplication-of-a-distribution-by-a-smooth-function]]); a distribution whose support is ambient closed has a unique zero extension ([[thm-extension-by-zero-for-distributions-with-ambient-closed-support]]).

[F3] Local convolution is smooth ([[thm-convolution-with-a-test-function-is-smooth]]). Compact smooth parameter integrals commute with distribution pairing ([[lem-distribution-pairing-with-smooth-parameter-families]]); compact Riemann integrals admit affine substitution ([[cor-change-of-variables-for-compactly-supported-functions]]) and agree with their complex Lebesgue integrals under Countable Choice ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]]). Distributions obey finite-order estimates on a fixed compact test support ([[thm-local-finite-order-characterization-of-distributions]]). The weak-convergence conclusion of [[thm-mollifier-approximation-in-distributions]] is consistent with, but does not itself assert, the reflected-test estimates below.

[F4] A distribution vanishes on tests supported away from its support ([[def-support-of-a-distribution]]).

[F5] Under Countable Choice, locally integrable functions define regular distributions ([[thm-locally-integrable-functions-embed-in-distributions]]). Countable Choice also supplies the Lebesgue interfaces in F3 and a sequence of cutoffs in F1 ([[def-countable-choice]]).

## Proof

**Given:** $u$ and Countable Choice.

1.1 If $\Omega=\varnothing$ use $f_j=0$ for every $j\in\mathbb N$. Otherwise set $K_0=\varnothing$ and, for $j\ge1$, set $$K_j=\{x\in\mathbb R^n:|x|\le j,\ \operatorname{dist}(x,\mathbb R^n\setminus\Omega)\ge1/j\},$$ with distance to the empty set interpreted as infinity. The distance function is one-Lipschitz, so F1 makes each $K_j$ compact as a closed bounded set; the strict inequalities $j<j+1$ and $1/j>1/(j+1)$ give $K_j\subseteq\operatorname{int}K_{j+1}$. If $L\subseteq\Omega$ is compact, finitely many balls $B(x_i,r_i/2)$ cover $L$ with $B(x_i,r_i)\subseteq\Omega$; hence $L$ is bounded and has distance at least $\min_i(r_i/2)>0$ from the complement, so $L\subseteq K_j$ for all sufficiently large $j$. Put $\chi_0=0$ and use Countable Choice with F1 to choose, for every $j\ge1$, a cutoff $\chi_j$ equal to one near $K_j$. The product $\chi_j u$ vanishes outside $\operatorname{supp}\chi_j$ directly from its definition, so its support is compact and ambient closed. Let $w_j$ be its zero extension by F2. Apply F1 with $K=\{0\}$ and $\Omega=\mathbb R^n$ to obtain a nonnegative bump $\eta$ equal to one near zero. Its Lebesgue integral $c$ is finite and positive, so $\rho=\eta/c$ is a unit-mass bump; compactness of its support gives $R>0$ with $\operatorname{supp}\rho\subseteq B(0,R)$. For each $j\ge1$ with nonempty cutoff support, take $d_j$ to be the smaller of one and half the distance from $\operatorname{supp}\chi_j$ to $\mathbb R^n\setminus\Omega$; for empty support put $d_j=1$. Then $d_j>0$ and $\operatorname{supp}\chi_j+\overline B(0,d_j)\subseteq\Omega$. Set $\varepsilon_j=\min(1/j,d_j/(2R))$. [given, F1, F2, F5]

2.1 Put $f_0=0$, and for $j\ge1$ define $f_j=w_j*\rho_{\varepsilon_j}$. F3 makes the latter smooth on all $\mathbb R^n$. If $x$ is outside the closed sum $\operatorname{supp}\chi_j+\varepsilon_j\operatorname{supp}\rho$, the test $y\mapsto\rho_{\varepsilon_j}(x-y)$ has support disjoint from $\operatorname{supp}w_j$. F4 gives $f_j(x)=0$. The sum is compact and lies in $\Omega$ by step 1.1. Thus every $f_j|_\Omega$ belongs to $\mathcal D(\Omega)$, and F5 makes its integral functional a distribution. [step 1.1, F3, F4, F5]

3.1 For fixed $\psi\in\mathcal D(\Omega)$ extend it by zero to $\mathbb R^n$. For $j\ge1$, apply F3's parameter-pairing lemma to $\psi(x)\rho_{\varepsilon_j}(x-y)$ and then affine substitution $x=y+\varepsilon_j z$. This gives $\int f_j\psi=w_j(\psi_{\varepsilon_j})=u(\chi_j\psi_{\varepsilon_j})$, with $\psi_\varepsilon(y)=\int\rho(z)\psi(y+\varepsilon z)\,dz$. All sufficiently small $\varepsilon$ have these test supports in one compact $L\subseteq\Omega$. By step 1.1, $L\subseteq K_j$ for all sufficiently large $j$. Then $\chi_j\psi_{\varepsilon_j}=\psi_{\varepsilon_j}$. For each multi-index $\alpha$, differentiating the compact integral and using $\int\rho=1$ gives $\sup_y|\partial^\alpha\psi_\varepsilon(y)-\partial^\alpha\psi(y)|\le\|\rho\|_{L^1}\sup_{y,\,|h|\le\varepsilon R}|\partial^\alpha\psi(y+h)-\partial^\alpha\psi(y)|\to0$. Uniform continuity of every derivative of the compactly supported smooth $\psi$ proves the limit. F3's finite-order estimate on $L$ now gives $u(\psi_{\varepsilon_j})\to u(\psi)$, proving weak convergence. A convergent sequence meets every neighborhood of its limit, which proves density. Zero $u$ gives the zero sequence, and Countable Choice has precisely the uses in F5. $\square$ [step 2.1, step 1.1, F1, F2, F3, F5]
