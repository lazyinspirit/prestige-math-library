---
id: lem-haar-regularization-of-transitive-unitary-cocycles
kind: lemma
title: Haar regularization of transitive unitary cocycles
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
local_addition: true
proof_strategy: direct
deps:
  - lem-haar-lifts-and-borel-descent-on-a-homogeneous-space
  - lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - thm-tonelli-and-fubini-for-completed-product-measures
  - def-axiom-of-choice
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-borel-cross-sections-for-closed-subgroups
  - lem-second-countable-lch-spaces-are-standard-borel
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - def-strongly-continuous-unitary-representation
  - lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
  - thm-monotone-convergence-for-the-integral
  - thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. W. Mackey, Imprimitivity for Representations of Locally Compact Groups I, PNAS 35 (1949) 537-545 (Internet Archive capture of the PubMed Central scan)"
      url: "https://web.archive.org/web/2020id_/https://pmc.ncbi.nlm.nih.gov/articles/PMC1063076/pdf/pnas01546-0045.pdf"
---

## Statement

Assume AC. Let $G,H,\mu,s$ be as in the Haar-lift lemma, $K$ separable, and
$c:G\times G/H\to U(K)$ Borel with
$c(g_1g_2,x)=c(g_1,g_2x)c(g_2,x)$ for each pair and almost every $x$. Suppose
$g\mapsto c(g,\cdot)$ is continuous in local convergence in measure in the
strong topology of $U(K)$. Then there exist a strongly continuous unitary
representation $\sigma:H\to U(K)$ and a Borel $B:G/H\to U(K)$ with
$c(g,x)=B(gx)\sigma(s(gx)^{-1}gs(x))B(x)^{-1}$ for every $g$ and almost every
$x$. This formula gives a strict Borel cocycle on all of $G\times G/H$. The
representation $\sigma$ is unique up to unitary equivalence under Borel
changes of fibre gauge.

## Facts & Assumptions

**Given:** AC, a second-countable LCH group $G$, a closed subgroup $H$, the quotient $G/H$ with a Borel section $s$, a nonzero quasi-invariant measure class (a representative $\mu$), a separable Hilbert space $K$, and a Borel cocycle $c$.

[F1] The Haar-lift lemma supplies: $q^{-1}(E)$ is Haar null iff $\mu(E)=0$; the coordinate map $\Theta(x,h)=s(x)h$ is a Borel isomorphism; and every Borel $F:G/H\times H\to U(K)$ satisfying $F(x,hk)=F(x,h)$ for all $k$ and a.e. $(x,h)$ equals $B(x)$ a.e. for a Borel $B:G/H\to U(K)$ ([[lem-haar-lifts-and-borel-descent-on-a-homogeneous-space]], [[lem-borel-cross-sections-for-closed-subgroups]]).

[F2] Steinhaus–Pettis: for a separable $K$, $U(K)$ in the strong topology is a second-countable topological group and every Borel homomorphism $H\to U(K)$ is strongly continuous ([[lem-steinhaus-and-pettis-for-second-countable-locally-compact-groups]], [[def-strongly-continuous-unitary-representation]]).

[F3] Completed-product Tonelli/Fubini for $\sigma$-finite measures; left translations preserve the Haar measure and right translations scale it by the modular function; Haar null sets of the completed product are preserved by the coordinate changes used below ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]], [[thm-monotone-convergence-for-the-integral]]).

[F4] For a Borel $U(K)$-valued function $u$ on $G$ and $\xi\in K$, the translates $g\mapsto u(g t)\xi$ are continuous in local measure: on a fixed finite-Haar-measure set $C$ one has $\int_C\|u(gt)\xi-u(g_0t)\xi\|^2\,dt\to0$. This follows by approximating $t\mapsto u(t)e_j$ on relatively compact sets by continuous compactly supported $K$-valued functions (using a countable orthonormal basis and the density of $C_c$ in $L^2$) and then applying the $L^2$ translation continuity, uniformly over $g$ in a compact neighbourhood, where the modular factor $\Delta_G(t)$ is bounded ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]).

[F5] Finite measures absolutely continuous with respect to a $\sigma$-finite measure have Radon–Nikodym densities ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]). AC implies DC and Countable Choice for the Tonelli, density and selection interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[lem-second-countable-lch-spaces-are-standard-borel]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the cocycle $c$ and the continuity hypothesis.

1.1 Lift to $G$: put $C(u,v)=c(uv^{-1},q(v))$, a Borel $U(K)$-valued function on $G\times G$. For the cocycle law applied at $g_1=uv^{-1}$, $g_2=vw^{-1}$ in the second variable $q(w)$, the equivariance $q(gx)=gq(x)$ of the quotient map gives $(vw^{-1})q(w)=q(vw^{-1}w)=q(v)$, so $C(u,v)C(v,w)=c(uv^{-1},(vw^{-1})q(w))c(vw^{-1},q(w))=c(uw^{-1},q(w))=C(u,w)$ wherever the a.e. cocycle identity of $c$ holds at that triple. The set of triples $(u,v,w)$ for which it may fail is the preimage of the cocycle law's null set under the homeomorphism $(u,v,w)\mapsto(uv^{-1},vw^{-1},w)$ of $G^3$, whose Jacobian is a positive modular factor; by [F3] that preimage is null. Hence $C(u,v)C(v,w)=C(u,w)$ for Haar-a.e. $(u,v,w)$. [F1, F3]

2.1 Choose $w_0$ by Fubini so that $C(u,v)C(v,w_0)=C(u,w_0)$ for Haar-a.e. $(u,v)$, and set $b(u)=C(u,w_0)=c(uw_0^{-1},q(w_0))$, a Borel $U(K)$-valued function. Then $C(u,v)=C(u,w_0)C(v,w_0)^{-1}=b(u)b(v)^{-1}$ for Haar-a.e. $(u,v)$, i.e. $c(g,q(t))=b(gt)b(t)^{-1}$ for Haar-a.e. $(g,t)$. [F3, step 1.1]

3.1 Upgrade to every fixed $g$: let $G_0$ be the conull set of $g$ for which the identity of [step 2.1] holds for a.e. $t$; it is dense because Haar measure is positive on nonempty open sets, so every $g_0$ is a limit of a net $(g_i)$ in $G_0$. Along that net the left-hand classes $t\mapsto c(g_i,q(t))$ converge in local measure to $t\mapsto c(g_0,q(t))$ by the continuity hypothesis: for a finite-Haar-measure set $C\subseteq G$, the finite measure $q_*(\mathbf 1_C\,dt)$ is absolutely continuous with respect to $\mu$ by [F1]; truncating its Radon–Nikodym density and exhausting the $\sigma$-finite base shows that local convergence in $\mu$-measure implies convergence for this finite measure. Thus pullback is continuous in local Haar measure. The right-hand classes $t\mapsto b(g_it)b(t)^{-1}$ converge in local measure to $t\mapsto b(g_0t)b(t)^{-1}$ by [F4]; multiplication by the fixed field $b(t)^{-1}$ preserves this convergence, as follows by approximating $b(t)^{-1}\xi$ on each finite-measure set by finite-valued vectors and using the uniform norm bound on unitaries. Since the two sides agree at each $g_i$, uniqueness of local-measure limits gives $c(g_0,q(t))=b(g_0t)b(t)^{-1}$ for a.e. $t$. As $g_0$ was arbitrary, the identity holds for every fixed $g$ and Haar-a.e. $t$. [F4, F5, step 2.1]

4.1 Stabilizer constants: for $h\in H$ put $A_h(t)=b(t)^{-1}b(th)$. For every $g$ and Haar-a.e. $t$, [step 3.1] applied to $gt$ and to $t$, together with $q(th)=q(t)$ and the cocycle law, gives $A_h(gt)=A_h(t)$; Tonelli and the measure-preserving change $(g,t)\mapsto(gt,t)$ show that $A_h(u)=A_h(t)$ for Haar-a.e. $(u,t)$, so $A_h$ is Haar-a.e. constant, equal to some $\sigma(h)\in U(K)$; hence $b(th)=b(t)\sigma(h)$ for Haar-a.e. $t$. [F3, step 3.1]

5.1 $\sigma$ is a homomorphism: applying [step 4.1] twice, $b(t)\sigma(hk)=b(thk)=b(t)\sigma(h)\sigma(k)$ a.e., so $\sigma(hk)=\sigma(h)\sigma(k)$. It is Borel: integrating the matrix coefficients of the Borel $U(K)$-valued function $A_h$ against a fixed positive probability density on $G$ returns the matrix coefficients of $\sigma(h)$ (because $A_h=\sigma(h)$ a.e.) and is Borel in $h$ by Tonelli; by [F2], applied to the second-countable group $H$ and the target $U(K)$, $\sigma$ is strongly continuous. [F2, step 4.1]

6.1 Descent: define $F(x,r)=b(s(x)r)\sigma(r)^{-1}$. For $h\in H$, $F(x,rh)=b(s(x)rh)\sigma(rh)^{-1}=b(s(x)r)\sigma(h)\sigma(h)^{-1}\sigma(r)^{-1}=F(x,r)$ up to the a.e. statements of [step 5.1]; hence by [F1] there is a Borel $B:G/H\to U(K)$ with $b(t)=B(q(t))\sigma(s(q(t))^{-1}t)$ for Haar-a.e. $t$. [F1, step 4.1, step 5.1]

7.1 Substituting [step 6.1] into [step 3.1] at the points $t$ and $gt$ gives, for every fixed $g$, $c(g,q(t))=B(q(gt))\sigma(s(q(gt))^{-1}gt)\,\sigma(s(q(t))^{-1}t)^{-1}B(q(t))^{-1}$ for a.e. $t$; using $q(gt)=gq(t)$ and the exact section identity $g s(x)=s(gx)h(g,x)$ this is the displayed formula for a.e. $x$; the strict section identity then makes the displayed expression an exact Borel cocycle on all of $G\times G/H$. [F1, step 3.1, step 6.1]

7.2 Uniqueness of $\sigma$: if $(B_i,\sigma_i)$ both factorize $c$, set $b_i(t)=B_i(q(t))\sigma_i(s(q(t))^{-1}t)$; then $b_2(gt)^{-1}b_1(gt)=b_2(t)^{-1}b_1(t)$ for every $g$ and a.e. $t$, so [step 4.1] makes $b_2^{-1}b_1$ a constant unitary $T$, and right-$H$ covariance gives $\sigma_2(h)T=T\sigma_1(h)$ for every $h$. Since a change of gauge multiplies the lifted factorizations on the left, the class of $\sigma$ is unchanged. [step 4.1, step 6.1]

8.1 Steps 5.1, 6.1, 7.1 and 7.2 give a strongly continuous $\sigma$, a Borel $B$ with the displayed factorization, its exact cocycle form, and the uniqueness up to gauge, as claimed. [step 5.1, step 6.1, step 7.1, step 7.2, F5] ∎

## Remarks

The continuity hypothesis is used only in the upgrade step [3.1]; the a.e. cocycle law and the left-invariance arguments are pure Haar-Tonelli computations. No value of an a.e. class is ever evaluated at a prescribed null coset.
