---
id: def-cft-r5-n1-superconformal-algebra
kind: definition
title: $N=1$ superconformal mode algebra in NS and Ramond sectors
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-virasoro-algebra
  - thm-complex-numbers-form-a-field
  - def-vector-space
dependency_roles:
  def-virasoro-algebra: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-vector-space: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthias R. Gaberdiel, An Introduction to Conformal Field Theory, arXiv:hep-th/9910156v2"
      url: https://arxiv.org/pdf/hep-th/9910156v2
      locator: "§3.7.6, printed pp. 29–31 (NS superconformal mode relations and extended-algebra distinction); §4.1, printed pp. 37–38, equation (189) (Ramond modes)."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§5.4, printed pp. 68–70, super stress-tensor OPE, N=1 mode relations, central-charge normalization and NS/R moding."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Facts & Assumptions

**Given:** Work over $\mathbb C$. The modes $L_m$ ($m\in\mathbb Z$) and $C$ are even (parity $0$), and $G_r$ is odd (parity $1$); $C$ is central, meaning its bracket with every mode is zero. The bracket of two odd modes is denoted by braces; in any representation it acts by the operator anticommutator $ST+TS$. In the Neveu–Schwarz (NS) sector $r\in\mathbb Z+\tfrac12$; in the Ramond (R) sector $r\in\mathbb Z$.

Here a **complex Lie superalgebra** means a complex vector space in the sense of [[def-vector-space]], graded as $\mathfrak g=\mathfrak g_{\bar 0}\oplus\mathfrak g_{\bar 1}$, with a parity-preserving bilinear bracket satisfying $[A,B]=-(-1)^{|A||B|}[B,A]$ and, for homogeneous $A,B,D$, the graded Jacobi identity $(-1)^{|A||D|}[A,[B,D]]+(-1)^{|B||A|}[B,[D,A]]+(-1)^{|D||B|}[D,[A,B]]=0$. A **representation** means a complex vector space $V=V_{\bar 0}\oplus V_{\bar 1}$ with this $\mathbb Z/2$-grading and a parity-preserving linear map $\rho:\mathfrak g\to\operatorname{End}_{\mathbb C}(V)$ satisfying $\rho([A,B])=[\rho(A),\rho(B)]_{\mathrm s}$ for homogeneous $A,B$; here $\operatorname{End}_{\mathbb C}(V)$ is the set of complex-linear maps $V\to V$, with $[S,T]_{\mathrm s}=ST-(-1)^{|S||T|}TS$. For the algebra defined below, it has **central charge** $c$ when $\rho(C)=c\,\operatorname{id}_V$.

An algebra $*$-structure is a parity-preserving conjugate-linear involution $A\mapsto A^*$ satisfying $[A,B]^*=[B^*,A^*]$ for homogeneous elements. The convention specified below is the $*$-structure used here.

An **algebraic $*$-representation** here means such a representation on a nonzero graded complex vector space $\mathcal H=\mathcal H_{\bar 0}\oplus\mathcal H_{\bar 1}$ with a positive-definite sesquilinear form $\langle\cdot,\cdot\rangle$ satisfying $\langle v,u\rangle=\overline{\langle u,v\rangle}$ (conjugate-linear in the first variable and linear in the second), together with a graded dense linear domain $\mathcal D=\mathcal D_{\bar 0}\oplus\mathcal D_{\bar 1}\subseteq\mathcal H$ for the norm $\|u\|=\sqrt{\langle u,u\rangle}$, invariant under every mode. The adjoint condition is the formal identity $\langle\rho(A)u,v\rangle=\langle u,\rho(A^*)v\rangle$ for every generator $A$ and $u,v\in\mathcal D$. It is an identity on this common domain; no operator closure or essential self-adjointness is included.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]: The Virasoro bracket is $[L_m,L_n]=(m-n)L_{m+n}+\frac{m^3-m}{12}\delta_{m+n,0}C$, and its cubic central term satisfies the Lie-algebra Jacobi identity.

[F2] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field, so the defining brackets extend bilinearly over the stated coefficient field.

[A1] The $N=1$ super-Virasoro normalization used here is the standard one in Gaberdiel, §3.7.6 and §4.1, and Ginsparg, §5.4. It is distinct from an extended super-$W$ algebra.

## Definition

For either index set $I=\mathbb Z+\tfrac12$ (NS) or $I=\mathbb Z$ (R), take $\mathfrak g_{\bar0}=(\bigoplus_{m\in\mathbb Z}\mathbb C L_m)\oplus\mathbb C C$ and $\mathfrak g_{\bar1}=\bigoplus_{r\in I}\mathbb C G_r$. Thus all displayed mode symbols and $C$ form a linearly independent homogeneous basis of $\mathfrak g=\mathfrak g_{\bar0}\oplus\mathfrak g_{\bar1}$; vectors are finite linear combinations, with coefficientwise operations and no completion. On this carrier define the $N=1$ superconformal mode algebra by complex-bilinear and super-skew extension of
$
[L_m,G_r]=\left(\frac m2-r\right)G_{m+r},\qquad
\{G_r,G_s\}=2L_{r+s}+\frac{r^2-\tfrac14}{3}\,\delta_{r+s,0}C,
$
the Virasoro brackets in [F1], and $[C,L_m]=[C,G_r]=0$. Brackets not forced by these rules and super-skew symmetry vanish. In a representation with $C=cI$, the displayed central terms carry the scalar $c$.

The algebraic adjoint convention for a real central charge is $L_m^*=L_{-m}$, $G_r^*=G_{-r}$ and $C^*=C$. A $*$-representation must have $c\in\mathbb R$; this definition does not assert a positive-energy spectrum or classify representations.

A full N=(1,1) mode system has a second, antiholomorphic copy $\bar L_m,\bar G_r,\bar C$ with the same formulas and its own charge $\bar c$. All barred generators supercommute with the unbarred generators. This product construction does not identify the two charges.

## Proof
 1.1 The field [F2] supplies the coefficient scalars for the bilinear brackets. For triples containing only $L$ modes, Jacobi is exactly the Virasoro Jacobi identity supplied by [F1]. Centrality makes every Jacobi expression containing $C$ vanish. [given, F1, F2, A1]

1.2 For $(L_m,L_n,G_r)$, put $a(m,r)=m/2-r$. The only coefficient identity required by super-Jacobi is $ a(n,r)a(m,n+r)-a(m,r)a(n,m+r)=(m-n)a(m+n,r). $ Expanding both products and cancelling the quadratic terms gives this identity, so the $G_{m+n+r}$ coefficients agree. [given, A1, algebra]

2.1 For $(L_m,G_r,G_s)$, the $L_{m+r+s}$ coefficients on the two sides of $[L_m,\{G_r,G_s\}]=\{[L_m,G_r],G_s\}+\{G_r,[L_m,G_s]\}$ are both $2(m-r-s)$. If $m+r+s\ne0$, all central terms vanish. If $m+r+s=0$, setting $b(x)=(x^2-\tfrac14)/3$ reduces equality of central terms to $ a(m,r)b(m+r)+a(m,s)b(r)=\frac{m^3-m}{6},\qquad s=-m-r. $ Substituting $s=-m-r$ gives $ a(m,r)b(m+r)+a(m,s)b(r) =\frac{(m/2-r)((m+r)^2-1/4)+(3m/2+r)(r^2-1/4)}{3} =\frac{m^3-m}{6}, $ which is the central contribution from $2[L_m,L_{r+s}]$. [given, A1, step 1.2, algebra]

3.1 For three odd modes, super-Jacobi reduces to the cyclic sum of $[G_r,\{G_s,G_t\}]$. Its coefficient of $G_{r+s+t}$ is $(2r-s-t)+(2s-t-r)+(2t-r-s)=0$. These cases exhaust triples by the number of odd entries, proving the graded Jacobi identity. [given, A1, step 1.1, step 1.2, step 2.1, algebra]

4.1 For real $c$, reversing order in the adjoint of $[L_m,G_r]$ gives $a(m,r)G_{-m-r}=[G_{-r},L_{-m}]$; for $\{G_r,G_s\}$ it gives the same symmetric expression with indices $-r,-s$. For the $LL$ bracket, the adjoint of its central coefficient is unchanged, while $$[L_{-n},L_{-m}]=(m-n)L_{-m-n}+\frac{(-n)^3-(-n)}{12}\delta_{m+n,0}C.$$ On the support $m+n=0$, $(-n)^3-(-n)=m^3-m$, so this is exactly $[L_m,L_n]^*=[L_n^*,L_m^*]$, including the cubic central term. Thus the stated operation is an involutive anti-linear anti-automorphism. In a nonzero $*$-representation with $\rho(C)=cI$, the adjoint identity for $C=C^*$ gives $\bar c\langle u,u\rangle=c\langle u,u\rangle$ for nonzero $u\in\mathcal D$, hence $c\in\mathbb R$. [given, A1, step 1.1, step 2.1, step 3.1, algebra]

5.1 The antiholomorphic bracket is a copy of the same algebra, so its internal Jacobi identities follow from the preceding steps. Since all cross-copy superbrackets are zero, any mixed Jacobi expression has each nested term zero. This verifies the independent N=(1,1) product convention. [given, A1, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, algebra] ∎
## Copy conventions

The $N=1$ super-Virasoro algebra is only the subalgebra generated by the stress tensor and one supercurrent. It is not the extended $SW(3/2,5/2)$ algebra used for the exceptional $(E_6,D_8)$ target below.
