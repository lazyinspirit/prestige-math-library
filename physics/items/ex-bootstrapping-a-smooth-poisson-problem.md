---
id: ex-bootstrapping-a-smooth-poisson-problem
kind: example
title: "Bootstrapping a smooth Poisson problem"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [thm-interior-h-k-plus-two-elliptic-regularity, thm-interior-h-two-regularity-for-divergence-form-equations, thm-higher-order-sobolev-embedding, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-hk-and-hk-zero-notation, def-sobolev-extension-domain-and-extension-operator, thm-extension-theorem-for-bounded-smooth-domains, thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem, def-axiom-of-choice, def-countable-choice]
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
      locator: "Section 4.11, Corollary 4.29 (smooth data give smooth interior solutions), printed p. 114 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorems 5.8-5.9 (higher and infinite interior regularity), printed pp. 111-112 (read in full)"
---

## Example

Assume the Axiom of Choice (inherited from the embedding theorem used below)
together with Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let
$f\in C^\infty(\Omega)$, and let $u\in H^1(\Omega)$ be a local weak solution
of $-\Delta u=f$ on $\Omega$ in the sense of
[[def-local-weak-solution-for-a-divergence-form-operator]]; for instance,
when $\Omega$ is a nonempty bounded open set and also $f\in L^2(\Omega)$,
$u$ may be the zero-trace weak Dirichlet solution, whose existence and uniqueness under the Axiom of Choice are
[[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]].
Iterating [[thm-interior-h-k-plus-two-elliptic-regularity]] with the
constant coefficients of the Laplacian gives
$u\in H^m_{\mathrm{loc}}(\Omega)$ for every $m$, hence a representative of
class $C^\infty$ by [[thm-higher-order-sobolev-embedding]], and for that
representative the equation $-\Delta u=f$ holds pointwise on $\Omega$. No
boundary data and no boundary regularity are used: the smoothness of $f$
alone permits the induction to continue at every order.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; an open set $\Omega\subseteq\mathbb R^n$; $f\in C^\infty(\Omega)$; and a local weak solution $u\in H^1(\Omega)$ of $-\Delta u=f$ on $\Omega$.

[F1] A class $u\in H^1(\Omega)$ is a local weak solution of $-\Delta u=f$ when $a(u,v)=\int_\Omega f\overline v\,dx$ for every $v\in C_c^\infty(\Omega)$, with $a$ the form of the divergence-form operator; by the closure definition this is equivalent to the same identity for every bounded $\Omega_2\Subset\Omega$ and every $v\in H^1_0(\Omega_2)$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] Assume Countable Choice. The Laplacian $L=-\Delta$ has constant coefficients $a^{ij}=\delta^{ij}$, $b=c=0$, hence $a^{ij}\in W^{k+1,\infty}_{\mathrm{loc}}(\Omega)$ and $b,c\in W^{k,\infty}_{\mathrm{loc}}(\Omega)$ for every $k\ge0$ with zeroth-order principal bound $M_0=1$ and all positive-order derivative bounds zero; it is uniformly elliptic with $\theta=1$. ([[def-uniformly-elliptic-divergence-form-operator]])

[F3] Assume Countable Choice. Let $k\ge0$, let $L$ have $a^{ij}\in W^{k+1,\infty}_{\mathrm{loc}}(\Omega)$ and $b^i,c\in W^{k,\infty}_{\mathrm{loc}}(\Omega)$ with all coefficient derivatives through the indicated orders bounded by constants $M_\ell$, let $f\in H^k_{\mathrm{loc}}(\Omega)$, and let $u\in H^1(\Omega)$ be a local weak solution of $Lu=f$. Then $u\in H^{k+2}_{\mathrm{loc}}(\Omega)$. ([[thm-interior-h-k-plus-two-elliptic-regularity]])

[F4] Assume the Axiom of Choice. For $n\ge2$, let $\Omega_0$ be a bounded extension domain in $\mathbb R^n$, let $k\ge1$, $1\le p<\infty$ with $kp>n$. If $m\ge0$ and $0<\alpha<1$ satisfy $m+\alpha<k-n/p$, then every $u\in W^{k,p}(\Omega_0)$ has a representative in $C^{m,\alpha}(\overline{\Omega_0})$ with norm bounded by $C\|u\|_{W^{k,p}(\Omega_0)}$. In particular, $p=2$ and an integer $k>n/2$ give a continuous representative on $\Omega_0$. ([[thm-higher-order-sobolev-embedding]])

[F5] Every open ball in $\mathbb R^n$, $n\ge2$, is a bounded extension domain: it is a bounded $C^\infty$ domain in the graph sense, so [[thm-extension-theorem-for-bounded-smooth-domains]] supplies an extension operator. For $n=1$, on each bounded open interval $I\Subset\Omega$ every class in $W^{1,2}(I)$ has a unique continuous, locally absolutely continuous representative by [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]. ([[def-sobolev-extension-domain-and-extension-operator]])

[F6] Assume Countable Choice. If $u\in H^2_{\mathrm{loc}}(\Omega)$ is a local weak solution of $Lu=f$ with $a^{ij}\in W^{1,\infty}(\Omega)$, bounded first coefficient derivatives, and $f\in L^2_{\mathrm{loc}}(\Omega)$, then the equation holds pointwise almost everywhere, with $D_i(a^{ij}D_ju)$ understood through the a.e. defined product $(D_ia^{ij})D_ju+a^{ij}D_iD_ju$; for the constant coefficients of the Laplacian this is the a.e. identity $-\sum_iD_iD_iu=f$. ([[thm-interior-h-two-regularity-for-divergence-form-equations]])

## Verification

1.1 Local smoothness at every order. Fix $k\ge0$ and a bounded open $\Omega''\Subset\Omega$. By [F2] the Laplacian satisfies the coefficient hypotheses of [F3] at order $k$, and $f\in C^\infty(\Omega)$ gives $f\in H^k_{\mathrm{loc}}(\Omega)$; since $u$ is a local weak solution, [F3] gives $u\in H^{k+2}_{\mathrm{loc}}(\Omega)$, hence $u\in H^{k+2}(\Omega'')$. As $k$ was arbitrary, $u\in H^m_{\mathrm{loc}}(\Omega)$ for every $m\ge1$. [F1, F2, F3, algebra, given]

2.1 A smooth representative. If $n\ge2$, fix a ball $B\Subset\Omega$ and an integer $m\ge0$. Choose a slightly larger ball $B'\Subset\Omega$ and an integer $s>m+n/2$. Step 1.1 gives $u\in H^s(B')$, and [F5] makes $B'$ a bounded extension domain; [F4] then gives a $C^{m,\alpha}$ representative on $\overline{B'}$ for some $\alpha>0$. For different $m$ these representatives agree everywhere on overlaps: they are continuous and represent the same almost-everywhere class. Thus they define a $C^\infty$ representative on $B$. If $n=1$, fix a bounded open interval $I\Subset\Omega$. Step 1.1 gives $D^ju\in H^1(I)$ for every $j\ge0$. By [F5] each has a unique continuous, locally absolutely continuous representative $g_j$. The weak derivative of $g_j$ is $D^{j+1}u$, so the fundamental theorem gives $g_j(y)-g_j(x)=\int_x^y g_{j+1}(t)\,dt$ for $x<y$ in $I$; continuity of $g_{j+1}$ implies $g_j\in C^1(I)$ and $g_j'=g_{j+1}$. Iterating, $g_0$ is $C^\infty(I)$. These local representatives agree on overlaps, yielding a smooth representative on all components of $\Omega$. [F4, F5, step 1.1, algebra]

3.1 The equation holds pointwise. For the $C^\infty$ representative of step 2.1, $u\in H^2_{\mathrm{loc}}(\Omega)$ and $f\in L^2_{\mathrm{loc}}(\Omega)$, so by [F6] the equation $-\Delta u=f$ holds pointwise almost everywhere, the Laplacian's expression being the a.e. function $-\sum_iD_iD_iu$. Both sides, $-\sum_iD_iD_iu$ by step 2.1 and $f$ by hypothesis, are continuous on $\Omega$, and two continuous functions that agree almost everywhere on an open set agree at every point. Thus the smoothed representative solves the classical equation pointwise. [F6, step 2.1, algebra, given] ∎

## Source notes

Hunter's Corollary 4.29 and Laugesen's Theorems 5.8-5.9 (printed pp. 114 and 111-112, read in full) iterate the interior estimate to obtain $H^m_{\mathrm{loc}}$ for every $m$ and then a smooth representative; the same two-step pattern is used above. The example separates the two inputs: the coefficient regime of the Laplacian never obstructs the induction, and the smoothness of $f$ is exactly what allows the data order $k$ to increase; the Axiom of Choice is carried only by the Sobolev embedding used for the representative.
