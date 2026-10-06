---
id: cor-smooth-data-give-smooth-interior-solutions
kind: corollary
title: "Smooth data give smooth interior solutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [thm-interior-h-k-plus-two-elliptic-regularity, thm-interior-h-two-regularity-for-divergence-form-equations, thm-higher-order-sobolev-embedding, def-sobolev-extension-domain-and-extension-operator, thm-extension-theorem-for-bounded-smooth-domains, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-local-weak-solution-for-a-divergence-form-operator, def-axiom-of-choice, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, Corollary 4.29, printed p. 114 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.9 (infinite interior regularity), printed p. 112 (read in full)"
---

## Statement

Assume the Axiom of Choice for the Sobolev embedding used in the last step,
and Countable Choice for the Sobolev interfaces. Let $\Omega\subseteq\mathbb
R^n$ be open, $n\ge1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and suppose
the coefficients $a^{ij},b^i,c$ and the datum $f$ are of class
$C^\infty(\Omega)$. If $u\in H^1(\Omega)$ is a local weak solution of
$Lu=f$ on $\Omega$ ([[def-local-weak-solution-for-a-divergence-form-operator]]),
then $u\in H^m_{\mathrm{loc}}(\Omega)$ for every $m\in\mathbb N$, and
consequently $u$ agrees almost everywhere with a function of class
$C^\infty(\Omega)$, for which $Lu=f$ holds pointwise in $\Omega$. No
boundary condition is imposed, and the conclusion is interior only.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the smooth coefficients and datum; and the local weak solution $u\in H^1(\Omega)$.

[F1] Interior $H^{k+2}$ regularity: for every $k\ge0$ and all $\Omega'\Subset\Omega''\Subset\Omega$, $u\in H^{k+2}(\Omega')$ with a bound in terms of the principal coefficient bounds through order $k+1$, the lower-order coefficient bounds through order $k$, and $\|f\|_{H^k(\Omega'')}+\|u\|_{L^2(\Omega'')}$; the theorem is applied after restricting the equation to a relatively compact outer open set, where smooth coefficients supply all the required coefficient bounds. ([[thm-interior-h-k-plus-two-elliptic-regularity]])

[F2] The a.e. strong form: on each relatively compact open patch the smooth principal coefficients are $W^{1,\infty}$ and $u\in H^2_{\mathrm{loc}}$, so the equation $Lu=f$ holds pointwise almost everywhere with $D_i(a^{ij}D_ju)=(D_ia^{ij})D_ju+a^{ij}D_iD_ju$. ([[thm-interior-h-two-regularity-for-divergence-form-equations]])

[F3] Higher-order Sobolev embedding: for $n\ge2$, if $k\ge1$, $1\le p<\infty$, $kp>n$, then every class in $W^{k,p}(\Omega_0)$ for a bounded extension domain $\Omega_0$ has a representative in $C^{m,\alpha}(\overline{\Omega_0})$ for integers $m\ge0$ and $0<\alpha<1$ with $m+\alpha<k-n/p$; in particular $H^k(\Omega_0)$ for $k>n/2$ has a continuous representative. Balls are bounded extension domains. ([[thm-higher-order-sobolev-embedding]], [[def-sobolev-extension-domain-and-extension-operator]], [[thm-extension-theorem-for-bounded-smooth-domains]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]])

[F4] Under the Axiom of Choice, in dimension one each $H^1(I)$ class on a bounded interval has a unique absolutely continuous representative, whose classical derivative agrees almost everywhere with its weak derivative. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])

## Proof

**Proof technique:** direct.

1.1 Every local Sobolev order. Fix $\Omega'\Subset\Omega$ and $m\in\mathbb N$, and choose $\Omega''$ with $\Omega'\Subset\Omega''\Subset\Omega$. Since $a^{ij},b^i,c\in C^\infty(\Omega)$, their derivatives are bounded on $\Omega''$ by constants $M_\ell$ for $\ell\le m+1$, and $f\in C^\infty(\Omega)$ gives $f\in H^m(\Omega'')$; restrict the equation to $\Omega''$, where $u\in H^1$ and the coefficient derivatives have global bounds. Choose $\Omega'\Subset G\Subset\Omega''$ and apply [F1] with $k=m$ on this restricted domain and inner pair $(\Omega',G)$ to obtain $u\in H^{m+2}(\Omega')\subseteq H^m(\Omega')$. As $m$ and $\Omega'$ were arbitrary, $u\in H^m_{\mathrm{loc}}(\Omega)$ for every $m$. [F1]

2.1 Fix a ball $B\Subset\Omega$. For $n\ge2$ and any integer $m\ge0$, choose an integer $s>m+n/2$ and $0<\alpha<\min(1,s-m-n/2)$. Step 1.1 gives $u\in H^s(B)$, and [F3] applied directly to $u$ gives a $C^{m,\alpha}(\overline B)$ representative. Representatives obtained for different $m$ agree everywhere on $B$, since they are continuous and represent the same almost-everywhere class; therefore this one representative is smooth. For $n=1$, take bounded open intervals $I\Subset\Omega$. Every $D^ju$ belongs to $H^1(I)$ by step 1.1, so [F4] gives continuous absolutely continuous representatives $g_j$ with $g_j(y)-g_j(x)=\int_x^y g_{j+1}(t)dt$. Continuity of $g_{j+1}$ makes $g_j$ classically differentiable with derivative $g_{j+1}$, proving smoothness by iteration. These representatives agree on overlaps, again by continuity and almost-everywhere equality, and hence give a smooth representative on all of $\Omega$. [F3, F4, step 1.1, algebra]

3.1 The equation pointwise. For the smooth representative, step 1.1 gives $u\in H^2_{\mathrm{loc}}(\Omega)$, so [F2] gives $Lu=f$ pointwise almost everywhere, the expression $D_i(a^{ij}D_ju)$ being the a.e. function $(D_ia^{ij})D_ju+a^{ij}D_iD_ju$. Both sides are continuous for the smooth representative and $f$ is continuous, and two continuous functions that agree almost everywhere on an open set agree everywhere; hence $Lu=f$ holds pointwise in $\Omega$. [F2, step 1.1, step 2.1]

4.1 Conclusion. Smooth coefficients and smooth interior data propagate the interior regularity to every order and upgrade the weak solution to a classical one on $\Omega$; no boundary condition is imposed and no statement is made about the boundary. The Axiom of Choice supplies the higher-order Sobolev embedding in dimensions $n\ge2$ and the absolutely-continuous representative interface [F4] in dimension one. Countable Choice enters through the Sobolev interfaces of [F1]. [step 2.1, step 3.1] ∎

## Source notes

Hunter's Corollary 4.29 (printed p. 114) and Laugesen's Theorem 5.9 (printed p. 112) draw precisely this conclusion: iterate the interior higher-order estimate and apply the Sobolev embedding. The scaffold listed Morrey's inequality alongside the higher-order embedding; the proof uses only the embedding (on balls, which are bounded extension domains), so the Morrey citation is not needed.
