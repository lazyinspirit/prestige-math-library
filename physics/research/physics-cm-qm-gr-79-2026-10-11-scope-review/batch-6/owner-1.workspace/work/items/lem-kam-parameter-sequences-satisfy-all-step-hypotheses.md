---
id: lem-kam-parameter-sequences-satisfy-all-step-hypotheses
kind: lemma
title: "The KAM parameter sequence: every step satisfies the smallness, truncation, parameter and contraction hypotheses"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-generator-flow-and-remainder-bound, lem-frequency-reparametrization-by-contraction, lem-cauchy-fourier-and-lattice-shell-bounds, thm-geometric-series, def-interval, thm-exponential-beats-every-polynomial]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  lem-frequency-reparametrization-by-contraction: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-interval: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §4-§5 (iteration parameters, Fourier tails and simultaneous initial choices; the conservative exponents below are adapted to the local one-step estimates), PDF pp. 20-27."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §6.1-§6.2 (choice of the geometric sequences of strips and truncations, and the quadratic-convergence bookkeeping), printed pp. 92-106."
      url: "https://www.johndcook.com/KAM.pdf"
---

## Statement

Let $n\ge2$, $\tau>n-1$, $\mu:=\tau+3n+2$, $\alpha>0$, $s_0>0$, and let $C\ge1$ bound the constants in [[lem-kam-generator-flow-and-remainder-bound]] and [[lem-frequency-reparametrization-by-contraction]]. Let $c=c(n,\tau)\in(0,1]$ be the one-step smallness constant, and fix $C_*\ge3C2^\mu$. Put
$$q:=4^{-(\mu+1)},\qquad D:=\max(16nC4^\mu,1/c).$$
Fix $0<\sigma_0\le\min(1,s_0/32)$, $0<r_0\le1$, $K_0\ge1$, and $h_0,E_0>0$ satisfying:

1. $E_0\le\min(c^2,c,\sigma_0^2,1/64,q^2/C_*^2)$;
2. with $A:=C_*^2E_0$ and $L:=|\log A|+n\log(1/\sigma_0)+2\log C_*+n\log2+1$, one has $K_0\sigma_0\ge\max(1,2L)$;
3. $D\alpha E_0\sigma_0^\mu\le h_0\le\min(1,\alpha/(2K_0^{\tau+1}))$.

Define for all integers $j\ge0$
$$\sigma_j:=\sigma_02^{-j},\qquad K_j:=K_04^j,\qquad h_j:=h_04^{-\mu j},\qquad s_j:=s_0-8\sum_{i<j}\sigma_i,$$
$$E_{j+1}:=C_*E_j^{3/2},\qquad\eta_j:=\sqrt{E_j},\qquad r_{j+1}:=\eta_jr_j,\qquad\varepsilon_j:=\alpha E_jr_j\sigma_j^\mu,\qquad B_j:=C\varepsilon_j/r_j.$$
Then every $j\ge0$ satisfies:

(a) $0<r_j\le1$, $0<\sigma_j\le\min(1,s_j/8)$, $K_j\sigma_j\ge1$, $0<h_j\le1$, $s_j\ge s_0/2$, $s_j-8\sigma_j\ge s_0/2$, and $0<\eta_j\le\min(1/8,\sigma_j)$;
(b) $E_j\le c\eta_j$, $E_{j+1}\le qE_j$, and $E_j\le q^jE_0\le4^{-j}E_0$;
(c) $\varepsilon_j\le c\alpha\eta_jr_j\sigma_j^\mu$ and $\varepsilon_j\le ch_jr_j$;
(d) $h_j\le\alpha/(2K_j^{\tau+1})$ and $h_{j+1}\le h_j/4$;
(e) $\sigma_j^{-n}e^{-K_j\sigma_j/2}\le E_j$;
(f) $B_j=C\alpha E_j\sigma_j^\mu\le h_{j+1}/(16n)$, so the frequency contraction applies with $B=B_j$; moreover
$$\frac{E_j}{h_{j+1}}\le\frac{4^\mu E_0}{h_0}4^{-j},\qquad \frac{B_j}{h_{j+1}}\le\frac{C4^\mu\alpha E_0\sigma_0^\mu}{h_0}2^{-(\mu+2)j};$$
(g) all the following sums converge:
$$\sum_{j\ge0}(r_j+\sigma_j)E_j\le4(r_0+\sigma_0)E_0,\qquad \sum_{j\ge0}E_j\le2E_0,\qquad \sum_{j\ge0}2^jE_j\le2E_0,\qquad \sum_{j\ge0}\frac{\varepsilon_j}{r_jh_j}\le\frac43\frac{\alpha E_0\sigma_0^\mu}{h_0}.$$
The recurrence has precisely the perturbation budget
$$\varepsilon_{j+1}=C_*2^{-\mu}E_j\varepsilon_j\ge3CE_j\varepsilon_j.$$
Consequently the one-step remainder estimate $|P_j^+|\le C[E_j+\eta_j^2+\sigma_j^{-n}e^{-K_j\sigma_j/2}]\varepsilon_j$ on the retained action and angle domain closes with $|P_{j+1}|\le\varepsilon_{j+1}$ after frequency retraction. For fixed $n,\tau,c,C,C_*,\sigma_0$ the initial conditions are simultaneously satisfiable for all sufficiently small $E_0$ and every fixed $\alpha>0$; for $0<\alpha\le1$ the allowed threshold for $E_0$ can be chosen independently of $\alpha$.

## Facts & Assumptions

**Given:** The data, constants, initial conditions and sequences in the Statement.

[F1] The one-step hypotheses and estimates of [[lem-kam-generator-flow-and-remainder-bound]] with $E=\varepsilon/(\alpha r\sigma^\mu)$, margins $\eta,\sigma$, and frequency shift bounded by $C\varepsilon/r$. The mean frequency shift has no Fourier-loss factor: $[R]=[Q]$ and each component is the angular mean of $\partial_{I_i}P(0,\vartheta,\nu)$, bounded by $\varepsilon/r$ by [[lem-cauchy-fourier-and-lattice-shell-bounds]].

[F2] If a holomorphic frequency shift on $O_h$ is bounded by $B\le h/(16n)$, [[lem-frequency-reparametrization-by-contraction]] gives $\phi:O_{h/4}\to O_{h/2}$ satisfying $\phi(\nu)+v(\phi(\nu))=\nu$, $|\phi-\mathrm{id}|\le B$, and $h\|D\phi-I_n\|\le(16n/7)B$.

[F3] $2^j\ge1+j$, $2^j\ge(3/2)^j$, and the geometric-series sums $\sum_j2^{-j}=2$, $\sum_j4^{-j}=4/3$ ([[thm-geometric-series]], [[def-interval]]). Domains and notation are from [[def-holomorphic-kam-domain-and-diophantine-labels]].

[F4] For every integer $m\ge0$, $t^m e^{-t}\to0$ as $t\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

## Proof

**Proof technique:** direct; verify the recurrence, domain margins, cutoff and parameter estimates, and then check the initial interval.

1.1 Since $C_*\sqrt{E_0}\le q<1$, induction gives $E_{j+1}/E_j=C_*\sqrt{E_j}\le q$ and $E_j\le q^jE_0$. Thus $\sqrt{E_j}\le c$, $\eta_j\le1/8$, and $\eta_j/\sigma_j\le(\sqrt{E_0}/\sigma_0)(2\sqrt q)^j\le1$. This proves (b) and the assertions about $\eta_j$ in (a). Also induction directly gives $E_j=A^{(3/2)^j}/C_*^2$, so $\log E_j=-(3/2)^j|\log A|-2\log C_*$ because $0<A\le q^2<1$. [given, algebra]

2.1 The action radii decrease because $\eta_j\le1/8$, and $\sigma_j\le\sigma_0\le1$. Further, $K_j\sigma_j=K_0\sigma_02^j\ge1$ and $h_j\le h_0\le1$. By the geometric series, $\sum_{i<j}\sigma_i=2\sigma_0(1-2^{-j})$, whence $s_j=s_0-16\sigma_0+16\sigma_j$ and $s_j-8\sigma_j=s_0-16\sigma_0+8\sigma_j\ge s_0/2$. Since $\sigma_j\le\sigma_0\le s_0/32\le s_j/8$, all remaining assertions of (a) follow. [step 1.1, F3, given, algebra]

2.2 The inequality $E_j\le c\eta_j$ gives the first bound in (c). For the other bound, divide by $h_jr_j$: $\varepsilon_j/(h_jr_j)=\alpha E_j\sigma_0^\mu4^{\mu j}2^{-\mu j}/h_0\le(\alpha E_0\sigma_0^\mu/h_0)2^{-(\mu+2)j}\le1/D\le c$, using $E_j\le4^{-(\mu+1)j}E_0$ and condition 3. Thus (c) holds at every step. [step 1.1, given, algebra]

2.3 Since $\mu>\tau+1$, condition 3 yields $h_j\le[\alpha/(2K_0^{\tau+1})]4^{-\mu j}\le\alpha/(2K_0^{\tau+1}4^{(\tau+1)j})=\alpha/(2K_j^{\tau+1})$, and $h_{j+1}/h_j=4^{-\mu}\le1/4$. Moreover $E_j/h_{j+1}\le4^\mu(E_0/h_0)4^{-j}$, and hence $B_j/h_{j+1}\le(C4^\mu\alpha E_0\sigma_0^\mu/h_0)2^{-(\mu+2)j}\le1/(16n)$ by $D\ge16nC4^\mu$. This proves (d) and (f). In particular [F2] applies on $O_{h_{j+1}}\subseteq O_{h_j/4}$, and its image lies in $O_{h_j/2}$. [step 1.1, F2, given, algebra]

2.4 Put $a:=|\log A|$ and $b:=n\log(1/\sigma_0)+2\log C_*$. All these quantities are nonnegative. Condition 2 and [F3] give $K_j\sigma_j/2\ge L\,2^j\ge a(3/2)^j+b+nj\log2+1$, using separately $2^j\ge(3/2)^j$, $2^j\ge1$ and $2^j\ge j$. Therefore $\log(\sigma_j^{-n}e^{-K_j\sigma_j/2})\le n\log(1/\sigma_0)+nj\log2-a(3/2)^j-b-nj\log2-1=\log E_j-1$. Exponentiation proves (e). [step 1.1, F3, given, algebra]

3.1 Since $r_j+\sigma_j\le r_0+\sigma_0$, the first sum in (g) is at most $(r_0+\sigma_0)E_0\sum_j4^{-j}\le4(r_0+\sigma_0)E_0$. Also $\sum_jE_j\le(4/3)E_0\le2E_0$ and $\sum_j2^jE_j\le E_0\sum_j2^{-j}=2E_0$. Step 2.2 gives $\sum_j\varepsilon_j/(r_jh_j)\le(\alpha E_0\sigma_0^\mu/h_0)\sum_j2^{-(\mu+2)j}\le(4/3)\alpha E_0\sigma_0^\mu/h_0$. These establish (g) without any assumption relating $r_0$ to $\sigma_0$. [step 1.1, step 2.1, step 2.2, F3, algebra]

3.2 The definitions give $\varepsilon_{j+1}/\varepsilon_j=(E_{j+1}/E_j)(r_{j+1}/r_j)(\sigma_{j+1}/\sigma_j)^\mu=C_*\sqrt{E_j}\sqrt{E_j}2^{-\mu}=C_*2^{-\mu}E_j\ge3CE_j$. By (e) and $\eta_j^2=E_j$, the remainder bound of [F1] is at most $3CE_j\varepsilon_j\le\varepsilon_{j+1}$. Retraction only evaluates this holomorphic remainder on its parameter subdomain by step 2.3 and [F2], so it cannot increase its sup-norm. The retained widths are $r_{j+1}=\eta_jr_j$ and $s_{j+1}=s_j-8\sigma_j$. [step 2.3, step 2.4, F1, F2, given, algebra]

4.1 To check feasibility, choose $K_0=\lceil\max(1,2L)/\sigma_0\rceil$ and $h_0=\min(1,\alpha/(2K_0^{\tau+1}))$. As $E_0\downarrow0$, this cutoff is bounded by a constant times $1+|\log E_0|$, so $2DE_0\sigma_0^\mu K_0^{\tau+1}\to0$. For completeness, with $t=|\log E_0|$, choose an integer $m>\tau+1$; for $t\ge1$, $(1+t)^{\tau+1}\le2^{\tau+1}t^m$, so [F4] implies $e^{-t}(1+t)^{\tau+1}\to0$. Thus for all sufficiently small $E_0$ one has $D E_0\sigma_0^\mu\le1/(2K_0^{\tau+1})$, and, for each fixed $\alpha$, also $D\alpha E_0\sigma_0^\mu\le1$. These are exactly the two inequalities needed for condition 3 with the chosen $h_0$. If $\alpha\le1$, the second follows already from the first since $K_0\ge1$; all thresholds are then independent of $\alpha$. Conditions 1 and 2 hold by further decreasing $E_0$ and by the cutoff choice. This proves simultaneous feasibility and completes the lemma. [step 1.1, step 3.2, F4, given, choose, algebra] ∎

## Remarks

The lower parameter width is proportional to the actual frequency shift $\varepsilon_0/r_0=\alpha E_0\sigma_0^\mu$. Replacing it by a multiple of $E_0$ would prevent a uniform $\varepsilon\le c\alpha^2$ application as $\alpha\downarrow0$. The faster decrease of $h_j$ preserves the finite-cutoff Diophantine bound; the still faster decrease of $E_j$ makes parameter derivatives summable. The angular loss of $8\sigma_j$ agrees with the retained domain of the local one-step construction.
