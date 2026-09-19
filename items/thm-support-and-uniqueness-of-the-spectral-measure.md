---
id: thm-support-and-uniqueness-of-the-spectral-measure
kind: theorem
title: Support and uniqueness of the spectral measure
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, thm-pvm-integral-is-a-star-homomorphism, lem-continuous-functional-calculus-produces-a-regular-pvm, thm-continuous-functional-calculus-for-bounded-normal-operators, thm-complex-stone-weierstrass-self-adjoint, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-regular-borel-measure-on-an-lch-space, def-projection-valued-measure, lem-scalar-and-complex-measures-from-a-pvm, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.74 and §5.7, printed pp.288–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Andreas Kriegl, Funktionalanalysis, §8.61, printed pp.196–198"
      url: "https://www.mat.univie.ac.at/~kriegl/Skripten/2019SSe.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$ with spectral projection valued measure $E$ on the Borel
$\sigma$-algebra of $\sigma(T)$. Then:

1. **support:** $E(U)\ne0$ for every nonempty relatively open subset
   $U\subseteq\sigma(T)$; equivalently the support of $E$ is $\sigma(T)$;
2. **uniqueness:** if $\Lambda\subseteq\mathbb C$ is nonempty and compact and
   $E'$ is a regular projection valued measure on the Borel $\sigma$-algebra of
   $\Lambda$ with $\int z\,dE'(z)=T$, then $E'(\Lambda\setminus\sigma(T))=0$
   and $E'(B)=E(B)$ for every Borel set $B\subseteq\sigma(T)$; in particular
   every scalar pairing $\langle E(\cdot)x,y\rangle$ is determined by $T$.

## Facts & Assumptions

[A1] For every continuous $f$ on $\sigma(T)$ one has $\|f(T)\|=\|f\|_\infty$ and $f(T)=\Phi_E(f)=\int f\,dE$; for every bounded Borel $h$ one has $\langle h(T)x,y\rangle=\int h\,dE_{x,y}$ with $E_{x,y}(B)=\langle E(B)x,y\rangle$. For every PVM $F$, its bounded integral $\Phi_F$ is a unital star-homomorphism ([[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[thm-pvm-integral-is-a-star-homomorphism]]).

[A2] The Borel calculus is multiplicative: $(fg)(T)=f(T)g(T)$ for bounded Borel $f,g$, and $E(B)=\mathbf 1_B(T)$; in particular $\Phi_E(g)=0$ whenever $g$ vanishes on a Borel set carrying the full projection ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-projection-valued-measure]]).

[A3] $E_x(B)=\langle E(B)x,x\rangle=\|E(B)x\|^2$ is a positive measure; for a nonnegative measurable $g$ one has $\int g\,dE_x=0$ if and only if $g=0$ $E_x$-almost everywhere ([[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[A4] $E$ is the unique regular PVM on the Borel $\sigma$-algebra of $\sigma(T)$ whose coordinate integral is $T$, and $\Lambda\setminus\sigma(T)$ is a countable union of compact subsets of $\Lambda$ ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]], [[lem-continuous-functional-calculus-produces-a-regular-pvm]], [[def-regular-borel-measure-on-an-lch-space]]).

[A5] The $\ast$-polynomials are uniformly dense in $C(\Lambda;\mathbb C)$ for compact $\Lambda\subseteq\mathbb C$, and for compact $\Lambda\subseteq\mathbb C$ the distance function $z\mapsto d(z,\sigma(T))$ is continuous, nonnegative, and vanishes exactly on $\sigma(T)$ ([[thm-complex-stone-weierstrass-self-adjoint]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded normal operator $T$ with spectral PVM $E$ on $\sigma(T)$, a nonempty relatively open $U\subseteq\sigma(T)$, and a regular PVM $E'$ on a nonempty compact $\Lambda\subseteq\mathbb C$ with $\int z\,dE'(z)=T$.

1.1 Suppose $U\subseteq\sigma(T)$ is nonempty and relatively open with $E(U)=0$; choose $\lambda\in U$ and $r>0$ with $\sigma(T)\cap\{|z-\lambda|<r\}\subseteq U$ and put $q(z):=\max\{0,r-|z-\lambda|\}$ on $\sigma(T)$. Then $q$ is continuous, $q\ge0$, $q(\lambda)=r=\|q\|_\infty$ because $\lambda\in\sigma(T)$, and $q$ vanishes outside $U$, so $q\mathbf 1_U=q$ and $\Phi_E(q)=\Phi_E(q\mathbf 1_U)=\Phi_E(q)\Phi_E(\mathbf 1_U)=q(T)E(U)=0$, whence $\|q(T)\|=0$; by the isometry of the continuous calculus $\|q\|_\infty=\|q(T)\|=0$, contradicting $q(\lambda)=r>0$. [A1, A2]

1.2 For a *-polynomial $p$ in $z,\overline z$ on $\Lambda$ one has $\Phi_{E'}(p)=p(T,T^*)$, while the continuous calculus on $\sigma(T)$ gives $p(T,T^*)=(p|_{\sigma(T)})(T)=\Phi_E(p|_{\sigma(T)})$; hence the bounded linear maps $f\mapsto\Phi_{E'}(f)$ and $f\mapsto\Phi_E(f|_{\sigma(T)})$ on $C(\Lambda;\mathbb C)$ agree on the uniformly dense family of *-polynomials and therefore on all continuous $f$. [A1, A5]

2.1 Consequently $\Phi_{E'}(q)=0$ for $q(z):=d(z,\sigma(T))$, since $q$ is continuous on $\Lambda$ with $q|_{\sigma(T)}=0$; then $\int q\,dE'_x=\langle\Phi_{E'}(q)x,x\rangle=0$ with $q\ge0$, so $q=0$ $E'_x$-almost everywhere and $E'_x(\Lambda\setminus\sigma(T))=0$; as $\|E'(\Lambda\setminus\sigma(T))x\|^2=E'_x(\Lambda\setminus\sigma(T))=0$ for every $x$, one gets $E'(\Lambda\setminus\sigma(T))=0$. [step 1.2, A2, A3, A5]

3.1 The restriction $E''(B):=E'(B)$ for Borel $B\subseteq\sigma(T)$ is a regular PVM on $\sigma(T)$ with $E''(\sigma(T))=E'(\Lambda)-E'(\Lambda\setminus\sigma(T))=I$ and $\Phi_{E''}(z)=\Phi_{E'}(z)-\Phi_{E'}(z\mathbf 1_{\Lambda\setminus\sigma(T)})=T-0=T$, because functions supported in the $E'$-null set $\Lambda\setminus\sigma(T)$ integrate to $0$; by the uniqueness clause of the spectral theorem $E''=E$, so $E'(B)=E(B)$ for every Borel $B\subseteq\sigma(T)$. [step 2.1, A2, A4]

4.1 The support of $E$ is all of $\sigma(T)$, and any regular PVM on a compact set whose coordinate integral is $T$ agrees with $E$ on $\sigma(T)$ and vanishes off it; in particular all pairings of $E$ are determined by $T$. [step 1.1, step 3.1, A6] ∎
