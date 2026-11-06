---
id: pthm-st-bosonic-brst-nilpotence
kind: physics-theorem
title: "Bosonic BRST Nilpotence"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 9
deps:
  - def-st-bosonic-brst-complex
  - pthm-st-bosonic-virasoro-central-extension
  - pthm-st-bosonic-bc-ghost-central-charge
dependency_roles:
  def-st-bosonic-brst-complex: formulation-prerequisite
  pthm-st-bosonic-virasoro-central-extension: physical-result
  pthm-st-bosonic-bc-ghost-central-charge: physical-result
physical_scope: "The open flat tensile bosonic-string BRST charge with D free coordinate bosons and standard bc ghosts, on the stated common algebraic domain; excludes Liouville or additional matter sectors."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§5.2–5.3.2 (PDF file pp.121–126; printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.113–120); BRST conventions and criticality context."
    - title: "Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3"
      url: "https://arxiv.org/pdf/hep-th/0607105v3"
      locator: "pp. 2–5; decomposition of Q_B and the D=26, intercept-one condition."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the open bosonic-string operator $Q_B$ defined in def-st-bosonic-brst-complex, with D free-boson matter Virasoro central charge $c_m=D$, bc ghost central charge $c_{gh}=-26$, and intercept a in the displayed zero-mode term, the algebraic identity $Q_B^2=0$ holds exactly when $D=26$ and $a=1$.

## Statement references

[David Tong, Lectures on String Theory, arXiv:0908.0333v3, full 218-page lecture notes](https://arxiv.org/pdf/0908.0333v3), §§5.2–5.3.2 (PDF file pp.121–126; printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.114–119); printed pp.113–120); BRST conventions and criticality context.

[Kazuyuki Furuuchi and Nobuyoshi Ohta, On the No-ghost Theorem in String Theory, arXiv:hep-th/0607105v3](https://arxiv.org/pdf/hep-th/0607105v3), pp. 2–5; decomposition of $Q_B$ and the $D=26$, intercept-one condition.

## Facts & Assumptions

[F1] [[def-st-bosonic-brst-complex]] fixes the locally finite algebraic operator $Q_B$, its ghost CAR, normal ordering, and the intercept term $-a c_0$.

[F2] [[pthm-st-bosonic-virasoro-central-extension]] gives the matter central charge $c_m=D$ in the fixed oscillator convention.

[F3] [[pthm-st-bosonic-bc-ghost-central-charge]] gives the ghost central charge $c_{gh}=-26$.

**Given:** Let $D\ge3$ and let $a\in\mathbb R$ be the coefficient in the zero-mode term of the open-string BRST charge.

## Proof

1.1 Write $Q_B=C+G-a c_0$, where $C=\sum_r c_{-r}L_r^m$ and $G=-\frac12\sum_{u,w}(u-w):c_{-u}c_{-w}b_{u+w}:$ uses the relative-vacuum ordering of [F1]. Put $v=|\downarrow\rangle$ for the ghost vacuum. Anticommuting the ghosts gives $C^2=\frac12\sum_{r,s}c_{-r}c_{-s}[L_r^m,L_s^m]$. Its noncentral part is $\sum_{r,s}r c_{-r}c_{-s}L_{r+s}^m$. Also $\{G,c_{-r}\}=-\frac12\sum_{u+w=r}(u-w)c_{-u}c_{-w}$, so $\{C,G\}$ cancels that noncentral part. The remaining matter contribution, by [F2], is $\frac D{12}\sum_{n>0}(n^3-n)c_{-n}c_n$. [given, F1, F2, algebra]

1.2 In the normally ordered expansion of $G^2=\{G,G\}/2$, terms with no contractions cancel because each cubic monomial is odd. Single contractions leave three $c$ modes and one $b$ mode; after antisymmetrizing their coefficient is the Witt Jacobi sum $(r-s)(r+s-t)+(s-t)(s+t-r)+(t-r)(t+r-s)=0$. There are at most two contractions, since the two original monomials contain just two $b$ modes and only $b,c$ pairs contract. Double contractions therefore leave two $c$ modes. Each contraction preserves total mode index, so $G^2=\sum_{n>0}g_n c_{-n}c_n$ for scalars $g_n$; the putative zero-index term is $c_0^2=0$. Normal-ordering contractions use just the CAR in [F1], with no inference from central charge alone. [F1, algebra]

1.3 The relative-vacuum ordering gives $Gv=0$: a nonzero cubic monomial must contain an annihilator, since two creation $c$ modes require nonpositive indices and their paired $b$ then has nonnegative index. For $n>0$, anticommuting $b_{-n}$ through $G$ and retaining the terms which survive on $v$ gives $G b_{-n}v=n c_0 b_{-n}v+\sum_{r=1}^{n-1}(n+r)c_{-r}b_{-(n-r)}v$. Explicitly, $\{G,b_{-n}\}=\sum_r(n+r):c_{-r}b_{r-n}:$; only $r=0,1,\ldots,n-1$ survive, since $b_0v=0$ and all positive modes annihilate $v$. [F1, algebra]

2.1 Extract the coefficient of the Fock basis vector $c_{-n}v$ after applying $G$ again to step 1.3. The identity in step 1.1 gives $\{G,c_0\}=-2\sum_{j>0}j c_{-j}c_j$, whose action on $b_{-n}v$ contributes $-2n c_{-n}v$. For $1\le r<n$, put $s=n-r$; the only terms in $\{G,c_{-r}\}b_{-s}v$ contributing $c_{-n}v$ have $(u,w)=(n,-s),(-s,n)$ in that identity and sum to $-(n+s)c_{-n}v=-(2n-r)c_{-n}v$. In $G(c_{-r}b_{-s}v)=\{G,c_{-r}\}b_{-s}v-c_{-r}G b_{-s}v$ (also for $r=0,s=n$), the last term has three creation modes by step 1.3 and contributes no one-creator vector. Consequently $g_n=-2n^2-\sum_{r=1}^{n-1}(n+r)(2n-r)=-(13n^3-n)/6=-\frac{26}{12}(n^3-n)-2n$. Here the finite sum uses $\sum_{r=1}^{n-1}r=n(n-1)/2$ and $\sum_{r=1}^{n-1}r^2=n(n-1)(2n-1)/6$, including the empty sum at $n=1$. Step 1.2 justifies extracting this coefficient, since $c_{-j}c_j b_{-n}v=\delta_{jn}c_{-n}v$. [F1, step 1.1, step 1.2, step 1.3, algebra]

3.1 Since $\{C,c_0\}=c_0^2=0$, the intercept contributes $-a\{G,c_0\}=2a\sum_{n>0}n c_{-n}c_n$. Combining steps 1.1, 1.2 and 2.1 yields the exact identity $Q_B^2=\sum_{n>0}c_{-n}c_n\left(\frac{D-26}{12}(n^3-n)+2(a-1)n\right)$. This locally computed ghost coefficient agrees with [F3]; its linear part has now been obtained in the actual relative ordering. All expansions are locally finite on the stated algebraic domain: annihilator indices are bounded on each input, and after their contractions each fixed remaining level admits only finitely many creators. No analytic limit or regularization is invoked. [F1, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 If $Q_B^2=0$, apply step 3.1 to a nonzero matter vacuum tensored with $b_{-n}v$. All terms except the $n$-th vanish, and $c_{-n}v\ne0$. Taking $n=1$ therefore forces $2(a-1)=0$ and $a=1$. [F1, step 3.1, algebra]

5.1 With $a=1$, the same test at $n=2$ forces $(D-26)(8-2)/12=(D-26)/2=0$, hence $D=26$. Conversely $D=26,a=1$ makes every coefficient in step 3.1 vanish, giving $Q_B^2=0$ on every finite-particle vector. [F1, step 3.1, step 4.1, algebra] ∎
