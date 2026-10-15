---
id: ex-td-local-entropy-maximum-below-global
kind: example
title: A local entropy maximum below a feasible global maximum
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An abstract two-system model with positive thermodynamic coordinates and a model-declared nonconvex energy-partition constraint; it illustrates global versus local maxima without a material-specific kinetic or empirical claim.
deps: [def-td-equilibrium-state-domain, def-td-process-and-protocol, def-td-thermal-contact-constraints, def-td-isolated-compound-feasible-set, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, post-td-concave-fundamental-entropy, post-td-bulk-additivity, post-td-entropy-maximum]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  def-td-thermal-contact-constraints: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-bulk-additivity: physical-assumption
  post-td-entropy-maximum: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §2.9, equilibrium and stability
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.3.3–4.3.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 7
---

## Example

Take two independent separated one-species systems $A$ and $B$ with material constitutions $c_A,c_B$ inside an isolated compound. Write $D_A:=D_{c_A}$ and $D_B:=D_{c_B}$ for their equilibrium domains; each is $(0,\infty)^3$ in $(\hat U_i,\hat V_i,\hat n_i)$, and each full domain is designated as an open single-phase chart. Fix positive $\hat V_A,\hat V_B,\hat n_A,\hat n_B$, total energy $U_A+U_B=1\,\mathrm J$, $s_*=1\,\mathrm{J\,K^{-1}}$, and toy entropies $S_A=2s_*\hat U_A$, $S_B=s_*\hat U_B$, using the same formulas on the distinct tagged constitutions $c_A^{(\lambda)}$ and $c_B^{(\lambda)}$ for every $\lambda>0$. Adopt the partitioned endpoint entropy $S_{\mathrm{tot}}(x_A,x_B):=S_A(x_A)+S_B(x_B)$ as additional model data and permit internal thermal energy transfer at fixed volumes and amounts by the explicit records below. This product entropy is not identified with a simple aggregate entropy after discarding the energy partition. Let

$$\phi(x)=((x,\hat V_A,\hat n_A),(1-x,\hat V_B,\hat n_B)),\qquad \mathcal F=\{\phi(x):x\in(0,3/10]\cup[3/5,9/10]\}.$$

The retained barrier constraint admits exactly this nonconvex subset of the energy partitions; all its pairs satisfy the same total energy, volume, and amount constraints. The additive entropy is $S_{\mathrm{tot}}(\phi(x))=s_*(1+x)$, so $x=3/10$ is a local maximum relative to $\mathcal F$ but lies below the feasible global maximum at $x=9/10$. These toy constitutive laws and constraints make no claim about a real material; calling an actual preparation metastable would require a separate kinetic model.

For complete contact data, set $E:=(0,3/10]\cup[3/5,9/10]$ and take $Z_{A\sqcup B}=Z_{A\sqcup B}^{\mathrm{eq}}=\mathcal F$, with constituent maps $\xi_A,\xi_B$ the two coordinate projections and contact family $\mathcal T:=\{(c_A,x_A):x_A\in D_A\}\cup\{(c_B,x_B):x_B\in D_B\}$. The two constitutions share one species label. Give the aggregate constitution the domain $D_{A\sqcup B}=(0,\infty)^3$, and set $\xi_{A\sqcup B}(\phi(x))=(1,\hat V_A+\hat V_B,\hat n_A+\hat n_B)$. This is a supplied aggregate coordinate map for process records, not an assertion of an aggregate entropy identity. For each $x,y\in E$ with $y\ge x$, admit the record $P_{x,y}$ of [[def-td-process-and-protocol]] on $I=[0,1]$ seconds: its aggregate endpoints are both this constant coordinate tuple, $z_{x,y}(t)=\phi(x)$ for $0\le t<1$ and $z_{x,y}(1)=\phi(y)$, its control record is $(x,y)$, and its signed transfer record is the real number $x-y$. Declare the control-record set to be $\{(x,y)\in E^2:y\ge x\}$ and the transfer-record set to be $\mathbb R$. Each transfer record supplies $H_{P_{x,y}}^{\mathrm{in}},H_{P_{x,y}}^{\mathrm{out}}:[0,1]\to[0,\infty)$, both identically zero, with numerical values in joules; these maps are nondecreasing and start at zero. No path regularity is required by the supplier. The outer boundary admits no matter or energy transfer; fixed constituent volumes and amounts and zero contact work are retained constraints. Supply fixed positive constituent and compound masses and zero endpoint center-of-mass velocities in one Galilean chart, and no separately tracked external-field energy. Thus these are core closed records, with $Q[P_{x,y}]=W_{\mathrm{on}}[P_{x,y}]=0$. For the contact-record set $\mathcal P_T=\{P_{x,y}:x,y\in E,\ y\ge x\}$ supply $q_{A\to B}[P_{x,y}]=x-y$ in joule magnitudes as in [[def-td-thermal-contact-constraints]]. The constituent energy changes are $(y-x)\,\mathrm J$ and $(x-y)\,\mathrm J$. Each feasible endpoint has its self-record; nonzero transfers occur when $y>x$. No contact-equilibrium designation or relaxation law is assumed.

To check consistency with the separately scoped aggregate postulates, take $\mathcal C_{AB}:=\{(x_A,x_B)\in D_A\times D_B:\hat U_A=\hat U_B\}$ and let $\kappa_{AB}$ sum their three coordinates. Adopt $S_{A\sqcup B}(\hat U,\hat V,\hat n)=\tfrac32s_*\hat U$. On this nonempty admission set, $S_A+S_B=3s_*\hat U_A=S_{A\sqcup B}(\kappa_{AB}(x_A,x_B))$, and all dimensioned coordinates add. Use the same aggregate formula on its scaled tags and all positive-coordinate scaling domains. The retained partitions in $\mathcal F$ have $x\ne1/2$ and are outside this aggregate admission set, so their separately adopted product entropy does not contradict the aggregate identity. Totals and entropy on these complete partitioned endpoints are additional declared maps allowed by [[def-td-isolated-compound-feasible-set]]. The maximum criterion of [[post-td-entropy-maximum]] is used on their stated entropy sum; no aggregate-composition or accessibility theorem is claimed.

## Facts & Assumptions

**Given:** The equilibrium-coordinate convention of [[def-td-equilibrium-state-domain]], the contact restrictions of [[def-td-thermal-contact-constraints]], the feasible-set definition [[def-td-isolated-compound-feasible-set]], and the entropy and equilibrium-maximum postulates.

[F1] The adopted entropy is finite and measured in $\mathrm{J\,K^{-1}}$ ([[post-td-concave-fundamental-entropy]]).

[F2] On every specified convex region the adopted entropy is continuous and satisfies the Jensen concavity inequality ([[post-td-concave-fundamental-entropy]]).

[F3] The admitted separated-pair set is a designated subset $\mathcal C_{AB}\subseteq D_A\times D_B$ ([[post-td-bulk-additivity]]).

[F4] Under the composition map, the dimensioned total energy of an admitted pair is $U_{A\sqcup B}=U_A+U_B$ ([[post-td-bulk-additivity]]).

[F5] Entropy is additive under the composition map on its admitted independent separated pairs; this does not identify the entropy of unadmitted retained partitions with aggregate entropy ([[post-td-concave-fundamental-entropy]]).

[F6] For $x\in B_{c,\lambda}$, the tagged bulk map is $\delta_\lambda(x)=(\lambda\hat U,\lambda\hat V,\lambda\hat n_1,\ldots,\lambda\hat n_r)$, and the entropy postulate assumes $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$ on that domain ([[post-td-bulk-additivity]], [[post-td-concave-fundamental-entropy]]).

[F7] An equilibrium feasible set is a model-declared subset satisfying the stated totals and retained constraints; the definition imposes no convexity on it ([[def-td-isolated-compound-feasible-set]]).

[F8] Stable equilibrium in this route is an attained global entropy maximum on the exact feasible set ([[post-td-entropy-maximum]]).

[L1] On $\mathbb R^6$, the Euclidean norm is defined by the sum of coordinate squares and induces the usual Euclidean metric ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[A1] $D_A=D_B=(0,\infty)^3$ in dimensionless coordinates, with each full domain designated as an open single-phase chart; the volumes and amounts and total energy and feasible set are exactly those in the Example, with separately adopted product entropy $S_{\mathrm{tot}}=S_A+S_B$; $S_A=2s_*\hat U_A$, $S_B=s_*\hat U_B$, and $s_*=1\,\mathrm{J\,K^{-1}}$. For every $\lambda>0$, choose $B_{c_A,\lambda}=D_A$ and $B_{c_B,\lambda}=D_B$, designate $D_{c_A^{(\lambda)}}=D_A$ and $D_{c_B^{(\lambda)}}=D_B$ in their own dimensionless coordinates, and set $S_{c_A^{(\lambda)}}(\hat U,\hat V,\hat n)=2s_*\hat U$ and $S_{c_B^{(\lambda)}}(\hat U,\hat V,\hat n)=s_*\hat U$ on those domains.

[A3] The contact configuration sets, endpoint maps, admitted records, internal transfer map, and nonempty aggregate admission set and entropy are exactly those specified in the Example. The product total energy is $U_A+U_B$ and the product total entropy is $S_A+S_B$, independently of aggregate composition.

[A2] A local maximum relative to $\mathcal F$ means a feasible point whose entropy is at least that of every feasible point in some relatively open neighborhood in the inherited Euclidean topology.

## Verification

**Given:** The model [A1] and [A3], the relative-local-maximum convention [A2], and facts [F1]–[F8] and [L1].

1.1 The two entropies in [A1] are finite, affine, continuous and concave on their convex domains; they are $C^2$ with positive energy derivatives $2\,\mathrm{K^{-1}}$ and $1\,\mathrm{K^{-1}}$. Their tagged scalings obey [F6]. On the aggregate admission set in [A3], equal constituent energies give $S_A+S_B=\tfrac32s_*(\hat U_A+\hat U_B)$, so [F3]–[F5] hold there; the aggregate entropy is also affine with positive energy derivative and the stated tagged scaling. For the retained product endpoints, the separately adopted sum in [A1] is affine and concave on the product domain and gives $S_{\mathrm{tot}}(\phi(x))=s_*(1+x)$, strictly increasing since $s_*>0$. [given, A1, A3, F1, F2, F3, F4, F5, F6, algebra]

2.1 For each admitted $P_{x,y}$ in [A3], the declared curve has its two endpoints in $Z^{\mathrm{eq}}$, and the maps $\xi_A,\xi_B$ retrieve $\phi(x)$ and $\phi(y)$ while $\xi_{A\sqcup B}$ gives the aggregate endpoints of that same record. External transfers and excluded endpoint energy changes are zero, and $(y-x)\,\mathrm J+(x-y)\,\mathrm J=0$ gives the product energy balance. Internal $q_{A\to B}[P_{x,y}]=x-y$ matches the increase of $B$'s energy in joule magnitudes; volumes and amounts remain fixed and no contact work occurs. Thus the admitted records witness the stated contact permissions and complete feasible endpoints. The entropy change is $s_*(y-x)\ge0$. This checks only the stipulated endpoint model, not any material dynamics. [given, A1, A3, F7, step 1.1, algebra]

2.2 Let $N=\{\phi(x)\in\mathcal F:|x-3/10|<3/10\}$. It is relatively open: for any represented $x$ choose $\delta=(3/5-x)/\sqrt2>0$; if $\|\phi(y)-\phi(x)\|_2<\delta$, then $\phi(y)-\phi(x)=(y-x,0,0,-(y-x),0,0)$ and [L1] gives $\|\phi(y)-\phi(x)\|_2=\sqrt2|y-x|$. Thus $|y-x|<(3/5-x)/2$, hence $y<3/5$. Every $x$ represented in $N$ satisfies $0<x<3/5$; the definition of $\mathcal F$ then forces $x\le3/10$. Since $S_{\mathrm{tot}}$ is increasing by step 1.1, no feasible point in $N$ has entropy greater than $S_{\mathrm{tot}}(\phi(3/10))$. Thus $\phi(3/10)$ is a local maximum in the sense of [A2], while [F7] permits the stated nonconvex feasible constraint. [given, A1, A2, F7, L1, step 1.1, algebra]

3.1 The feasible state $\phi(9/10)$ has entropy exceeding that of $\phi(3/10)$ by $s_*(9/10-3/10)=3s_*/5>0$. Because $S_{\mathrm{tot}}$ is increasing and $9/10$ is the largest feasible $x$, $\phi(9/10)$ is the global maximum on $\mathcal F$. Hence $\phi(3/10)$ is not a global maximum and cannot be classified as stable equilibrium under [F8]. [given, A1, F8, step 1.1, step 2.2, algebra] ∎
