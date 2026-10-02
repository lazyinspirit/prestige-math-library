---
id: cor-bounded-harmonic-functions-have-nontangential-limits
kind: corollary
title: "Bounded harmonic functions have L-infinity Fatou boundary data"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-harmonic-hardy-class-disc, def-poisson-integral-of-finite-boundary-measure, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-choice-implies-dependent-implies-countable-choice, thm-complex-holder-minkowski-and-the-quotient-norm, thm-fatou-nontangential-boundary-theorem-harmonic, thm-harmonic-hardy-representation-p-greater-one]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Theorem 6.13, printed p. 119 (PDF p. 124): if u is bounded and harmonic on B, then u = P[f] for some f in L-infinity(S); and the Fatou theorem discussion, printed p. 129 (PDF p. 134): Fatou's 1906 theorem that bounded harmonic functions in the disc have nontangential limits almost everywhere."
---

## Statement

Assume [[def-axiom-of-choice|the Axiom of Choice]]. Let
$u:\mathbb D\to\mathbb C$ be complex harmonic and bounded, and put
$M:=\sup_{z\in\mathbb D}|u(z)|<+\infty$. Then there is a unique
$f\in L^\infty(\mathbb T,m;\mathbb C)$ with $u=P[f]$, and
$$\|u\|_{h^\infty}=\sup_{z\in\mathbb D}|u(z)|=\|f\|_\infty.$$
Moreover, for $m$-almost every $\zeta\in\mathbb T$ one has
$u(z)\to f(\zeta)$ as $z\to\zeta$ within every fixed nontangential region
$\Gamma_A(\zeta)$, $A>1$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a complex harmonic function
$u:\mathbb D\to\mathbb C$ with $M:=\sup_{z\in\mathbb D}|u(z)|<+\infty$; the
notation $u_r(\zeta)=u(r\zeta)$ and $P[f]=P[fm]$.

[L1] Under countable choice $h^\infty(\mathbb D)$ consists of the complex
harmonic $u$ on $\mathbb D$ with
$\sup_{0\le r<1}\sup_{\zeta\in\mathbb T}|u(r\zeta)|<+\infty$, and
$$\|u\|_{h^\infty}=\sup_{0\le r<1}\ \sup_{\zeta\in\mathbb T}|u(r\zeta)|=\sup_{z\in\mathbb D}|u(z)| ;$$
every element of $h^\infty(\mathbb D)$ is continuous on $\mathbb D$
([[def-harmonic-hardy-class-disc]]).

[L2] Under the Axiom of Choice, for every $1<p\le\infty$ and every
$u\in h^p(\mathbb D)$ there is a unique $f\in L^p(\mathbb T,m;\mathbb C)$ with
$u=P[f]$, and $\|u\|_{h^p}=\|f\|_p$ ([[thm-harmonic-hardy-representation-p-greater-one]]).

[L3] Under countable choice, if $f\in L^1(\mathbb T,m;\mathbb C)$, then for
$m$-almost every $\zeta\in\mathbb T$ one has $P[f](z)\to f(\zeta)$ as
$z\to\zeta$ within every fixed nontangential region $\Gamma_A(\zeta)$,
$A>1$; the assertion uses an almost-everywhere representative of $f$
([[thm-fatou-nontangential-boundary-theorem-harmonic]]).

[L4] The Axiom of Choice implies dependent choice, which implies countable
choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[def-axiom-of-choice]]).

[L5] The normalized Haar measure $m$ on $\mathbb T$ is a probability measure:
$m(\mathbb T)=1$ and $\int_{\mathbb T}1\,dm=1$, so the class of the constant
function $1$ has $\|1\|_{L^1(\mathbb T,m)}=1$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L6] For conjugate exponents $p,p'\in[1,\infty]$ and
$f\in L^p(\mathbb T,m;\mathbb C)$, $g\in L^{p'}(\mathbb T,m;\mathbb C)$ one has
$\int_{\mathbb T}|fg|\,dm\le\|f\|_p\|g\|_{p'}$; the $L^p$ norms are the quotient
norms of the spaces $L^p(\mathbb T,m;\mathbb C)$
([[thm-complex-holder-minkowski-and-the-quotient-norm]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Proof

**Proof technique:** direct.

1.1 Class membership and choice bookkeeping. The hypothesis says that $u$ is complex harmonic with $M=\sup_{z\in\mathbb D}|u(z)|<+\infty$, so [L1] gives $u\in h^\infty(\mathbb D)$ and $\|u\|_{h^\infty}=M$. By [L4] the Axiom of Choice supplies countable choice, so the choice hypotheses of [L2] (the Axiom of Choice) and of [L3] (countable choice) are met. [given, L1, L2, L3, L4]

2.1 The boundary data. Apply [L2] with $p=\infty$, which is allowed because $1<\infty\le\infty$: there is a unique $f\in L^\infty(\mathbb T,m;\mathbb C)$ with $u=P[f]$, and $\|u\|_{h^\infty}=\|f\|_\infty$. Together with step 1.1 this gives $\|f\|_\infty=M=\sup_{z\in\mathbb D}|u(z)|$, so $f$ is the promised boundary datum and the norm identity holds. [step 1.1, L2]

3.1 The boundary datum is integrable. Apply the Hölder inequality of [L6] with the conjugate pair $(p,p')=(\infty,1)$, to $f\in L^\infty(\mathbb T,m;\mathbb C)$ and to the constant function $1\in L^1(\mathbb T,m;\mathbb C)$: one has $\|f\|_1=\int_{\mathbb T}|f\cdot 1|\,dm\le\|f\|_\infty\|1\|_1=\|f\|_\infty$, where the last equality is [L5]. Since $\|f\|_\infty=M<+\infty$ by step 2.1, this shows $f\in L^1(\mathbb T,m;\mathbb C)$. [step 2.1, L5, L6]

4.1 Nontangential convergence almost everywhere. By step 3.1 the function $f$ lies in $L^1(\mathbb T,m;\mathbb C)$ and by step 1.1 countable choice is available, so [L3] applies: there is a set $N\subseteq\mathbb T$ with $m(N)=0$ such that for every $\zeta\in\mathbb T\setminus N$ and every $A>1$ one has $P[f](z)\to f(\zeta)$ as $z\to\zeta$ within $\Gamma_A(\zeta)$. Since $u=P[f]$ by step 2.1, the same convergence holds with $u$ in place of $P[f]$; the exceptional set does not depend on $A$, and the almost-everywhere representative used is the class $f$ of step 2.1. [step 1.1, step 2.1, step 3.1, L3]

5.1 Assembly. Steps 2.1, 3.1 and 4.1 produce a unique $f\in L^\infty(\mathbb T,m;\mathbb C)$ with $u=P[f]$ and $\|u\|_{h^\infty}=\|f\|_\infty$, and show that $u(z)\to f(\zeta)$ as $z\to\zeta$ within every fixed nontangential region $\Gamma_A(\zeta)$, $A>1$, for $m$-almost every $\zeta\in\mathbb T$; by step 1.1 the norm $\|u\|_{h^\infty}$ equals $\sup_{z\in\mathbb D}|u(z)|$, so all clauses of the Statement hold. The Axiom of Choice is used exactly in step 1.1: it supplies the hypothesis of the representation theorem [L2] and, through dependent and countable choice, the hypothesis of the Fatou theorem [L3]. ∎ [step 1.1, step 2.1, step 3.1, step 4.1]
