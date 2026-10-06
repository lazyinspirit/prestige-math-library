---
id: lem-nondegenerate-czero-representations-have-regular-pvms
kind: lemma
title: Nondegenerate representations of C0 have regular PVMs
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
local_addition: true
proof_strategy: direct
deps:
  - lem-continuous-functional-calculus-produces-a-regular-pvm
  - thm-bounded-borel-pvm-integral
  - thm-one-point-compactification-properties
  - def-axiom-of-choice
  - def-one-point-compactification
  - thm-pvm-integral-is-a-star-homomorphism
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
    - title: "Lynn H. Loomis, An Introduction to Abstract Harmonic Analysis, §34A–34C, printed pp. 134–137"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
---

## Statement

Assume AC. Let $X$ be LCH and $T:C_0(X)\to\mathcal B(\mathcal H)$ a
nondegenerate star representation. Then a unique regular PVM $P$ on $X$ with
$P(X)=I$ satisfies $T(f)=\int_X f\,dP$ for every $f\in C_0(X)$. The zero
Hilbert space has the zero PVM.

## Facts & Assumptions

**Given:** AC, an LCH space $X$, a complex Hilbert space $\mathcal H$, and a nondegenerate star representation $T:C_0(X)\to\mathcal B(\mathcal H)$.

[F1] The one-point compactification $X^+=X\cup\{\infty\}$ is compact Hausdorff, $X$ is an open subspace carrying its own topology, and $\infty$ is the point at infinity ([[thm-one-point-compactification-properties]], [[def-one-point-compactification]]).

[F2] For a nonempty compact Hausdorff $K$ and a nonzero $\mathcal H$, every unital star homomorphism $\pi:C(K)\to\mathcal B(\mathcal H)$ is $\pi(f)=\int f\,dE$ for a unique regular PVM $E$ on $K$ ([[lem-continuous-functional-calculus-produces-a-regular-pvm]]).

[F3] For a PVM $E$ on a measurable space, the bounded Borel integral $\Phi_E$ is linear, multiplicative, conjugation preserving and unital; and if $E$ is a PVM on $X^+$ with scalar measures $E_x$, then $E_x$ is finite ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]]).

[F4] A star representation is complex-linear with $T(\overline f)=T(f)^*$ and $T(fg)=T(f)T(g)$; nondegeneracy means the closed linear span of $T(C_0(X))\mathcal H$ equals $\mathcal H$ (the convention of [[lem-continuous-functional-calculus-produces-a-regular-pvm]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the LCH space $X$, the Hilbert space $\mathcal H$ and the nondegenerate star representation $T$.

1.1 If $\mathcal H=\{0\}$, let $P$ be the zero PVM, $P(B)=0$ for every Borel $B$; then $P(X)=I=0$ and $\int f\,dP=0=T(f)$ for every $f$, and it is the only PVM on $\mathcal H=0$. So assume $\mathcal H\ne\{0\}$ from now on. [F3]

2.1 Extend $T$ to a unital star homomorphism $T^+:C(X^+)\to\mathcal B(\mathcal H)$ by $T^+(f)=T(f-f(\infty)\mathbf 1)+f(\infty)I$, where $f-f(\infty)\mathbf 1$ is regarded as an element of $C_0(X)$ through the open inclusion $X\subseteq X^+$: it is continuous on $X$ and tends to $0$ at $\infty$ because $f$ does. The map $f\mapsto f-f(\infty)\mathbf 1$ is linear, so $T^+$ is linear and $T^+(1)=I$; and $T^+$ is multiplicative and conjugation preserving because for $f,g\in C(X^+)$, writing $f=f_0+c$, $g=g_0+d$ with $c=f(\infty)$, $d=g(\infty)$ and $f_0,g_0\in C_0(X)$, one has $fg=f_0g_0+df_0+cg_0+cd$ with $f_0g_0+df_0+cg_0\in C_0(X)$, so $T^+(fg)=T(f_0)T(g_0)+dT(f_0)+cT(g_0)+cd\,I=T^+(f)T^+(g)$, and $T^+(\overline f)=T(\overline{f_0})+\overline c I=T(f_0)^*+\overline c I=T^+(f)^*$. [F1, F4, algebra, step 1.1]

3.1 By [F2] applied to the nonempty compact Hausdorff space $X^+$ and the unital star homomorphism $T^+$ there is a unique regular PVM $E^+$ on $X^+$ with $T^+(h)=\int_{X^+}h\,dE^+$ for every $h\in C(X^+)$. [F1, F2, step 2.1]

4.1 For every $f\in C_0(X)$ one has $T(f)E^+(\{\infty\})=0$: since $f\mathbf 1_{\{\infty\}}=0$ as a bounded Borel function on $X^+$ and the bounded integral is multiplicative, $T(f)E^+(\{\infty\})=\Phi_{E^+}(f)\Phi_{E^+}(\mathbf 1_{\{\infty\}})=\Phi_{E^+}(0)=0$. [step 3.1, F3]

5.1 Nondegeneracy forces $E^+(\{\infty\})=0$: suppose $E^+(\{\infty\})\ne0$ and pick $\xi=E^+(\{\infty\})\xi\ne0$ in its range; then for every $f\in C_0(X)$ and $\eta\in\mathcal H$, $\langle\xi,T(\overline f)\eta\rangle=\langle T(f)\xi,\eta\rangle=\langle T(f)E^+(\{\infty\})\xi,\eta\rangle=0$ by [step 4.1], so $\xi$ is orthogonal to the linear span of $T(C_0(X))\mathcal H$, which is dense by nondegeneracy; hence $\xi=0$, a contradiction. [step 4.1, F4]

6.1 Define $P(B):=E^+(B)$ for Borel $B\subseteq X$. This is a PVM on $X$: the Borel sets of the open subspace $X$ are exactly the traces of Borel sets of $X^+$, the values are orthogonal projections with $P(\varnothing)=0$, $P(X)=E^+(X)=I-E^+(\{\infty\})=I$ by [step 5.1], multiplicativity and countable additivity are inherited from $E^+$. For $f\in C_0(X)$, $T(f)=T^+(f)=\int_{X^+}f\,dE^+=\int_Xf\,dP$, since $f$ vanishes at $\infty$ and $E^+(\{\infty\})=0$. [step 2.1, step 3.1, step 5.1, F1]

7.1 $P$ is regular: for each $x$, the finite measure $P_x(B)=E^+_x(B)$ on $X$ is the restriction of the regular Borel measure $E^+_x$ on $X^+$; inner regularity holds because each compact subset of $X$ in the subspace topology is compact in $X^+$, and outer regularity holds because open subsets of $X$ are open in $X^+$. [step 6.1, F1, F3]

8.1 Uniqueness: if $P'$ is any regular PVM on $X$ with $T(f)=\int_Xf\,dP'$ for all $f\in C_0(X)$, let $\widetilde{P'}$ be its extension by zero at infinity, $\widetilde{P'}(B):=P'(B\cap X)$ for Borel $B\subseteq X^+$. This is a regular PVM on $X^+$: values are orthogonal projections, $\widetilde{P'}(X^+)=P'(X)=I$ and $\widetilde{P'}(\{\infty\})=0$, countable additivity and multiplicativity are inherited from $P'$, and its finite scalar measures are inner regular on all Borel sets, including those containing $\infty$, by compact approximation inside $X$. Outer regularity follows by applying inner regularity to complements in the compact space $X^+$; thus the extension is regular. For $h\in C(X^+)$ write $h=h_0+c$ with $h_0\in C_0(X)$ and $c=h(\infty)$; then $\int h\,d\widetilde{P'}=\int h_0\,dP'+c\,\widetilde{P'}(X^+)=T(h_0)+cI=T^+(h)$, so $\widetilde{P'}$ represents $T^+$ and the uniqueness in [F2] gives $\widetilde{P'}=E^+$ and hence $P'=P$. [step 2.1, step 3.1, F2, step 6.1, step 7.1]

9.1 Thus for nonzero $\mathcal H$ there is exactly one regular PVM $P$ on $X$ with $P(X)=I$ and $T(f)=\int_Xf\,dP$, namely the restriction of $E^+$; for $\mathcal H=\{0\}$ the zero PVM is the unique one by [step 1.1]. Both cases together prove the claim. [step 1.1, step 6.1, step 7.1, step 8.1] ∎
