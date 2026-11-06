---
id: def-cft-r5-n2-superconformal-algebra
kind: definition
title: $N=2$ superconformal mode algebra in NS and Ramond sectors
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
      locator: "§3.7.6, printed pp. 29–31, N=2 superconformal generators and central-term convention."
    - title: "Luis Apolo, Alexandre Belin, Suzanne Bintanja, Alejandra Castro, Christoph A. Keller, Deforming Symmetric Product Orbifolds: A tale of moduli and higher spin currents, arXiv:2204.07590v3"
      url: https://arxiv.org/pdf/2204.07590v3
      locator: "Appendix A.1, N=2 super-Virasoro mode brackets, adjoints, NS/R sectors and spectral flow."
verification:
  precheck: pass
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Facts & Assumptions

**Given:** Work over $\mathbb C$, with even (parity $0$) modes $L_m,J_m$ for $m\in\mathbb Z$, odd (parity $1$) modes $G_r^\pm$, and an even central element $C$, meaning its bracket with every mode is zero. The bracket of two odd modes is denoted by braces; in any representation it acts by the operator anticommutator $ST+TS$. For each copy, choose either the NS lattice $r\in\mathbb Z+\tfrac12$ or the R lattice $r\in\mathbb Z$. Write $a(m,r)=m/2-r$ and $b(r)=(r^2-\tfrac14)/3$.

A complex Lie superalgebra means a complex vector space in the sense of [[def-vector-space]], graded as $\mathfrak g=\mathfrak g_{\bar 0}\oplus\mathfrak g_{\bar 1}$, with a parity-preserving bilinear bracket satisfying $[A,B]=-(-1)^{|A||B|}[B,A]$ and, for homogeneous $A,B,D$, the graded Jacobi identity $(-1)^{|A||D|}[A,[B,D]]+(-1)^{|B||A|}[B,[D,A]]+(-1)^{|D||B|}[D,[A,B]]=0$. A **representation** of it means a complex vector space $V=V_{\bar 0}\oplus V_{\bar 1}$ with a $\mathbb Z/2$-grading and a parity-preserving linear map $\rho:\mathfrak g\to\operatorname{End}_{\mathbb C}(V)$ satisfying $\rho([A,B])=[\rho(A),\rho(B)]_{\mathrm s}$ for homogeneous $A,B$; here $\operatorname{End}_{\mathbb C}(V)$ is the set of complex-linear maps $V\to V$, with $[S,T]_{\mathrm s}=ST-(-1)^{|S||T|}TS$. For the algebra defined below, it has **central charge** $c$ when $\rho(C)=c\,\operatorname{id}_V$.

An algebra $*$-structure is a parity-preserving conjugate-linear involution $A\mapsto A^*$ satisfying $[A,B]^*=[B^*,A^*]$ for homogeneous elements. The convention specified below is the $*$-structure used here.

An **algebraic $*$-representation** here means such a representation on a nonzero graded complex vector space $\mathcal H=\mathcal H_{\bar 0}\oplus\mathcal H_{\bar 1}$ with a positive-definite sesquilinear form $\langle\cdot,\cdot\rangle$ satisfying $\langle v,u\rangle=\overline{\langle u,v\rangle}$ (conjugate-linear in the first variable and linear in the second), together with a graded dense linear domain $\mathcal D=\mathcal D_{\bar 0}\oplus\mathcal D_{\bar 1}\subseteq\mathcal H$ for the norm $\|u\|=\sqrt{\langle u,u\rangle}$, invariant under every mode. The adjoint condition is the formal identity $\langle\rho(A)u,v\rangle=\langle u,\rho(A^*)v\rangle$ for every generator $A$ and $u,v\in\mathcal D$. It is an identity on this common domain; no operator closure or essential self-adjointness is included.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]: The Virasoro bracket is $[L_m,L_n]=(m-n)L_{m+n}+\frac{m^3-m}{12}\delta_{m+n,0}C$, and its cubic central term satisfies the Lie-algebra Jacobi identity.

[F2] [[thm-complex-numbers-form-a-field]]: $\mathbb C$ is a field, so the displayed bilinear brackets define a mode algebra over the stated coefficient field.

[A1] Use the $N=2$ central-term and U(1)-charge normalization of Gaberdiel, §3.7.6, and Apolo et al., Appendix A.1. The algebra below is the $N=2$ super-Virasoro algebra, not an unspecified extension.

## Definition

For $I=\mathbb Z+\tfrac12$ (NS) or $I=\mathbb Z$ (R), take $\mathfrak g_{\bar0}=(\bigoplus_{m\in\mathbb Z}\mathbb C L_m)\oplus(\bigoplus_{m\in\mathbb Z}\mathbb C J_m)\oplus\mathbb C C$ and $\mathfrak g_{\bar1}=(\bigoplus_{r\in I}\mathbb C G_r^+)\oplus(\bigoplus_{r\in I}\mathbb C G_r^-)$. These symbols form a linearly independent homogeneous basis of $\mathfrak g(I)=\mathfrak g_{\bar0}\oplus\mathfrak g_{\bar1}$; all vectors are finite linear combinations, with coefficientwise operations and no completion. Define the brackets on this carrier by complex-bilinear and super-skew extension of the following relations and centrality of $C$:
$
\begin{aligned}
[L_m,L_n]&=(m-n)L_{m+n}+\frac{m^3-m}{12}\delta_{m+n,0}C,&
[L_m,J_n]&=-nJ_{m+n},&
[J_m,J_n]&=\frac m3\delta_{m+n,0}C,\\
[L_m,G_r^\pm]&=a(m,r)G_{m+r}^\pm,&
[J_m,G_r^\pm]&=\pm G_{m+r}^\pm,&
\{G_r^+,G_s^-\}&=2L_{r+s}+(r-s)J_{r+s}+b(r)\delta_{r+s,0}C,\\
\{G_r^+,G_s^+\}&=0,&\{G_r^-,G_s^-\}&=0.&
\end{aligned}
$
Brackets not forced by these rules vanish. A full $N=(2,2)$ mode system consists of an unbarred and an independent barred copy, with central charges $c_L,c_R$; every barred generator supercommutes with every unbarred generator. NS/R choices are independent in the two copies.

For real central charge use the adjoint convention
$
L_m^*=L_{-m},\qquad J_m^*=J_{-m},\qquad C^*=C,\qquad (G_r^+)^*=G_{-r}^-,\quad (G_r^-)^*=G_{-r}^+.
$
It is an algebraic *-structure; a scalar-central-charge *-representation must have $c\in\mathbb R$. No positive-energy spectrum or representation classification is part of this definition.

For $\eta\in\tfrac12\mathbb Z$, the spectral-flow map from the sector with lattice $\mathcal I$ to the sector with lattice $\mathcal I+\eta$ is
$
\varphi_\eta(L_n)=L_n+\eta J_n+\frac{\eta^2}{6}\delta_{n,0}C,\quad
\varphi_\eta(J_n)=J_n+\frac\eta3\delta_{n,0}C,\quad
\varphi_\eta(G_r^\pm)=G_{r\pm\eta}^\pm,\quad \varphi_\eta(C)=C.
$
Integer $\eta$ preserves NS and R moding; half-integer $\eta$ interchanges them.

## Proof
 1.1 The field [F2] supplies the coefficient scalars for the bilinear brackets. Triples containing only $L$ modes satisfy Jacobi by [F1]. Centrality handles any triple containing $C$. [given, F1, F2, A1]

2.1 For the other even triples, $LLJ$ reduces to $p(n+p)-p(m+p)=-p(m-n)$; both sides multiply $J_{m+n+p}$. For $LJJ$, the only possible central coefficient is $-n(m+n)/3-pn/3=-n(m+n+p)/3, $ which vanishes when its Kronecker delta is nonzero. $JJJ$ has only central inner brackets and hence vanishes. These exhaust the even triples not covered by 1.1. [given, A1, step 1.1, algebra]

3.1 For $LLG^q$ with $q=\pm1$, the coefficient identity is $ a(n,r)a(m,n+r)-a(m,r)a(n,m+r)=(m-n)a(m+n,r). $ Expansion verifies it. For $LJG^q$, the difference of the two iterated brackets has coefficient $q(a(m,n+r)-a(m,r))=-qn$, equal to the coefficient from $[-nJ_{m+n},G_r^q]$. For $JJG^q$, the two iterated terms both have coefficient $q^2$ and cancel, while $[J_m,J_n]$ is central, so its bracket with $G_r^q$ vanishes. [given, A1, step 2.1, algebra]

4.1 With one even mode and two equal-charge odd modes, every term vanishes. For mixed charges, $LGG$ has matching $L$ coefficient $2(a(m,r)+a(m,s))=2(m-r-s)$. Its $J$ coefficient identity is $ a(m,r)(m+r-s)+a(m,s)(r-m-s)=-(r-s)(r+s), $ which expands to $s^2-r^2$. When $m+r+s=0$, the central terms agree because, on substituting $s=-m-r$, $ a(m,r)b(m+r)+a(m,s)b(r) =\frac{(m/2-r)((m+r)^2-1/4)+(3m/2+r)(r^2-1/4)}3 =\frac{m^3-m}{6}. $ This is the central term in $[L_m,2L_{r+s}]$. For $JGG$, the $J$ coefficient on both sides is $2m$; the central coefficients agree since $ b(m+r)-b(r)=m(2r+m)/3=(r-s)m/3 $ on the support $r+s+m=0$. Thus the two-odd cases satisfy Jacobi. [given, A1, step 3.1, algebra]

5.1 For three odd modes with charges $+,+,-$, the two nonzero cyclic terms have coefficients $2(r-s)$ and $2(s-r)$ on $G^+_{r+s+t}$; with charges $+,-,-$, they have coefficients $2(s-t)$ and $2(t-s)$ on $G^-_{r+s+t}$. The third term in each case is zero because equal-charge anticommutators vanish. All-same-charge triples vanish term by term. Hence the odd triples satisfy Jacobi, completing the graded Jacobi check. [given, A1, step 4.1, algebra]

5.2 The adjoint reverses the order of brackets. For $LJ$, $[L_m,J_n]^*=-nJ_{-m-n}=[J_{-n},L_{-m}]$. For $LG$ it follows from $a(m,r)=-a(-m,-r)$ and $[G_{-r}^{\mp},L_{-m}]=-a(-m,-r)G_{-m-r}^{\mp}$; for $JG$ the charge changes sign together with $G^+\leftrightarrow G^-$; for $GG$ the two indices are exchanged and $b(-r)=b(r)$. For $LL$, direct substitution gives $$[L_{-n},L_{-m}]=(m-n)L_{-m-n}+\frac{(-n)^3-(-n)}{12}\delta_{m+n,0}C,$$ whose central coefficient equals $(m^3-m)/12$ on $m+n=0$, so $[L_m,L_n]^*=[L_n^*,L_m^*]$ including the central term. For $JJ$, $[J_{-n},J_{-m}]=(-n)\delta_{m+n,0}C/3=m\delta_{m+n,0}C/3$, matching $[J_m,J_n]^*$. Thus the displayed operation is an involutive anti-linear anti-automorphism. In a nonzero $*$-representation with $\rho(C)=cI$, the adjoint identity for $C=C^*$ gives $\bar c\langle u,u\rangle=c\langle u,u\rangle$ for nonzero $u\in\mathcal D$, hence $c\in\mathbb R$. [given, A1, step 1.1, step 3.1, step 4.1, algebra]

6.1 The spectral-flow map preserves $[L,L]$ because its additional central term is $\eta^2m/3\,\delta_{m+n,0}C$, equal to the shift from $(m-n)\varphi_\eta(L_{m+n})$. It preserves $[L,J]$ since on $m+n=0$ both central shifts are $\eta m/3$, and leaves $[J,J]$ unchanged. For $q=\pm1$, $[L_m+\eta J_m,G_{r+q\eta}^q]$ has coefficient $a(m,r+q\eta)+q\eta=a(m,r)$, and the $JG$ bracket preserves the charge. For the mixed anticommutator, its noncentral coefficients match because the transformed $J$ coefficient is $(r+\eta)-(s-\eta)=r-s+2\eta$, equal to the shift from $2\varphi_\eta(L)+(r-s)\varphi_\eta(J)$. On $r+s=0$, the image central coefficient is $ b(r+\eta)=b(r)+\frac{2r\eta+\eta^2}{3}, $ which equals the central shift from $2\varphi_\eta(L)+(r-s)\varphi_\eta(J)$ because $s=-r$. Equal-charge brackets and centrality remain zero and central, respectively. Therefore $\varphi_\eta$ preserves every bracket; the lattice statement follows from adding an integer or half-integer to $r$. It also preserves the *-structure: for example, $\varphi_\eta(G_r^+)^*=G_{-r-\eta}^-=\varphi_\eta(G_{-r}^-)$, and the $L,J,C$ formulas are similarly compatible. [given, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2, algebra]

7.1 The barred copy has the same internal Jacobi identities and spectral-flow checks as the unbarred copy. Every cross-copy bracket is zero by definition, so all mixed Jacobi expressions vanish term by term; independent spectral-flow maps on the two copies therefore preserve the full $N=(2,2)$ product algebra. [given, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2, step 6.1, algebra] ∎