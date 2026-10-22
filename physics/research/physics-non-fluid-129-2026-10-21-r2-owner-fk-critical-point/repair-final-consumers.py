from pathlib import Path
import hashlib,json,re
base=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-fk-critical-point')
archive=base/'before-parent-consumer-repair/items'; archive.mkdir(parents=True,exist_ok=True)
def load(id):
 p=Path('items')/(id+'.md'); s=p.read_text(); a=archive/p.name
 if not a.exists(): a.write_text(s)
 return p,s
def section(s,name,body):
 pat=r'(?ms)^## '+re.escape(name)+r'\n.*?(?=^## |\Z)'
 return re.sub(pat,lambda _: '## '+name+'\n\n'+body.strip()+'\n\n',s,count=1)
def deps(s,ids):
 a=s.index('deps:'); b=s.index('justified_by:',a)
 return s[:a]+'deps:\n'+''.join('  - '+i+'\n' for i in ids)+'dependency_roles:\n'+''.join('  '+i+': mathematical-premise\n' for i in ids)+s[b:]
id='lem-csm-frontier-fk-crossing-amplification';p,s=load(id)
ids=['def-countable-choice','def-csm-frontier-fk-infinite-volume-states','lem-csm-frontier-fk-free-wired-limits','lem-csm-frontier-fk-cylinder-pressure-comparison','lem-csm-frontier-fk-wired-annuli-and-numerical-threshold','lem-csm-frontier-fk-subcritical-exponential-decay']
s=deps(s,ids)
s=section(s,'Statement',r'''Assume Countable Choice. For every real $q\geq1$, put $p_{\rm sd}(q)=\sqrt q/(1+\sqrt q)$. The square-lattice free and wired cylinder-limit FK probability laws exist. For every $p>p_{\rm sd}(q)$, both have positive percolation probability. For every $p<p_{\rm sd}(q)$, there are $C(p,q),c(p,q)>0$ such that every arbitrary-boundary cylinder-limit FK state $\phi$ satisfies
$$\phi(x\leftrightarrow y)\leq C(p,q)e^{-c(p,q)\lVert x-y\rVert_2}\qquad(x,y\in\mathbb Z^2).$$
In particular, both percolation probabilities vanish below $p_{\rm sd}(q)$ and $p_c^0(q)=p_c^1(q)=p_{\rm sd}(q)$. These conclusions do not identify the free and wired measures at the critical parameter.''')
s=section(s,'Statement references','\n\n'.join('[['+i+']]' for i in ids))
s=section(s,'Facts & Assumptions',r'''**Given:** Real $q\geq1$, parameters $p\in(0,1)$, and the square-lattice model and percolation thresholds of [[def-csm-frontier-fk-infinite-volume-states]].

[A1] Countable Choice, in the sense of [[def-countable-choice]], is assumed for the countably additive probability-law and countable coupling constructions below.

[F1] Under [A1], free and wired finite-box FK laws have countably additive Borel cylinder-limit probability laws ([[lem-csm-frontier-fk-free-wired-limits]]).

[F2] Write $D_r$ for the cylinder event of an origin path to $\partial\Lambda_r$ within $\Lambda_r$, and $\pi^b_p$ for the numerical cylinder weights. With $\Theta^b(p)=\inf_r\pi^b_p(D_r)$, the numerical pressure comparison proves $\Theta^1(t)\leq\Theta^0(p)$ whenever $t<p$ ([[lem-csm-frontier-fk-cylinder-pressure-comparison]]).

[F3] The numerical threshold construction proves $\Theta^1(t)>0$ for every $t>p_{\rm sd}(q)$ ([[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]).

[F4] Under [A1], the subcritical exponential-decay lemma gives the displayed two-point bound uniformly for every arbitrary-boundary cylinder-limit state whenever $p<p_{\rm sd}(q)$ ([[lem-csm-frontier-fk-subcritical-exponential-decay]]).''')
s=section(s,'Proof',r'''1.1 By [A1] and [F1] the free and wired probability laws exist. In either law the events $D_r$ decrease with $r$. Their intersection is precisely the event that the origin cluster is unbounded: connection to every box boundary is equivalent to an unbounded cluster, and every finite path reaching a farther boundary contains an initial path to the nearer boundary. Countable additivity gives continuity from above, hence $\theta^b(p,q)=\inf_r\pi^b_p(D_r)=\Theta^b(p)$. This uses actual existing probability laws, rather than inferring their existence from consistent numerical cylinder weights. [A1, F1, F2, given, algebra]

1.2 Fix $p>p_{\rm sd}(q)$ and set $t=(p+p_{\rm sd}(q))/2$. Then $p_{\rm sd}(q)<t<p$. By [F2] and [F3], $\Theta^0(p)\geq\Theta^1(t)>0$, while [F3] directly gives $\Theta^1(p)>0$. Step 1.1 proves positive percolation for both laws at $p$. No equality of free and wired laws is used. [F2, F3, step 1.1, algebra]

2.1 For $p<p_{\rm sd}(q)$ apply [F4]. In particular, each free or wired law satisfies the displayed bound. An origin path to $\partial\Lambda_r$ reaches one of its $8r$ vertices, each of Euclidean norm at least $r$. A finite union bound gives $\phi(D_r)\leq8rC(p,q)e^{-c(p,q)r}\to0$. Step 1.1 then gives zero percolation. Both defining infima are $p_{\rm sd}(q)$, since every parameter above it belongs to each positive-percolation set and none below it does. The bound for all other cylinder-limit states is already exactly [F4]. [F4, given, step 1.1, step 1.2, algebra] ∎''')
s=section(s,'Remarks',r'''The finite numerical annulus construction and pressure comparison are choice-free. Countable Choice is stated explicitly where the proof requires actual infinite-volume Borel laws and the subcritical countable coupling process. Free/wired threshold coincidence is proved here by comparison across two distinct parameters, without an additional planar threshold-coincidence assumption.''')
p.write_text(s)
id='thm-csm-frontier-fk-square-critical-point';p,s=load(id)
s=deps(s,['def-countable-choice','def-csm-frontier-fk-infinite-volume-states','lem-csm-frontier-fk-crossing-amplification'])
s=s.replace('For every real $q\\geq1$, put','Assume Countable Choice. For every real $q\\geq1$, put',1)
s=s.replace('## Statement references\n\n','## Statement references\n\n[[def-countable-choice]]\n\n',1)
s=s.replace('**Given:** Real','**Given:** Countable Choice ([[def-countable-choice]]), real',1)
s=s.replace('are the conditional outputs of','are proved in').replace(' Its unresolved hypotheses remain in force here.','')
s=s.replace('This is an FK model deduction under the unresolved hypotheses carried by [F2].','The stated choice hypothesis is the one used by the supplier to construct the probability laws and its countable subcritical coupling.')
s=section(s,'Remarks',r'''The threshold and subcritical conclusions apply to all real $q\geq1$. Countable Choice binds the actual infinite-volume probability-law and coupling construction; the underlying finite numerical threshold result has a separate choice-free local proof. No assertion at criticality is added.''')
p.write_text(s)
id='thm-csm-frontier-potts-square-critical-temperature';p,s=load(id)
ids=['def-csm-frontier-finite-potts-fk','def-csm-frontier-fk-real-boundaries','thm-csm-frontier-edwards-sokal','lem-csm-frontier-fk-wired-annuli-and-numerical-threshold']
s=deps(s,ids)
s=s.replace('The assertion is conditional on the FK exact-threshold input in [[thm-csm-frontier-fk-square-critical-point]] and the current finite Potts/FK interfaces identified below.','This is a numerical limit of finite-volume probabilities; no infinite-volume probability-law extension is required.')
s=section(s,'Statement references','\n\n'.join('[['+i+']]' for i in ids))
s=s.replace('and the FK states at $p=1-e^{-\\beta J}$.','and the finite wired FK laws at $p=1-e^{-\\beta J}$.')
a=s.index('[F4]');b=s.index('## Proof',a)
s=s[:a]+r'''[F4] If $a_n(p,Q)$ is the finite wired probability of $0\leftrightarrow B_n$, its numerical limit $L(p,Q)$ exists, is positive for $p>\sqrt Q/(1+\sqrt Q)$, and is zero for $p<\sqrt Q/(1+\sqrt Q)$ ([[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]).

'''+s[b:]
s=section(s,'Proof',r'''1.1 Put $v=e^{\beta J}-1$ and $p=v/(1+v)=1-e^{-\beta J}$. On the finite spin-edge configurations with $\sigma|_{B_n}=1$, define the joint weight
$$W_n^+(\sigma,A)=v^{|A|}\prod_{\{x,y\}\in A}\mathbf1_{\{\sigma_x=\sigma_y\}}.$$
For fixed $\sigma$, summing over $A\subseteq E_n$ gives $\prod_{e\in E_n}(1+v\mathbf1_{\{\sigma_x=\sigma_y\}})=e^{-\beta H_n(\sigma)}$. For fixed $A$, every component meeting $B_n$ has color $1$ and each remaining component has $Q$ choices. After wiring all of $B_n$ into one class, the number of unpinned components is $k_{\xi_n}(A)-1$. Thus the edge marginal has weight $Q^{k_{\xi_n}(A)-1}v^{|A|}$, proportional by the configuration-independent factor $Q^{-1}$ to the wired FK weight in [F3]. Normalization therefore gives exactly the finite wired FK law. This supplies the pinned version of [F2] by an explicit finite sum. [F1, F2, F3, given, algebra]

1.2 Conditional on $A$, the origin has color $1$ with probability one if it connects to $B_n$, and with probability $1/Q$ otherwise. Indeed every unpinned component has its independent uniform color by the finite count of step 1.1. Consequently
$$\mathbb P_{\beta,n}^+(\sigma_0=1)=Q^{-1}+(1-Q^{-1})a_n(p,Q).$$
By [F4] the right side has a numerical limit. Hence $m_Q^+(\beta)=(1-Q^{-1})L(1-e^{-\beta J},Q)$. [F4, step 1.1, algebra]

2.1 The map $\beta\mapsto1-e^{-\beta J}$ is strictly increasing from $0$ to $1$. By [F4] and the positive prefactor in step 1.2, $m_Q^+(\beta)$ is zero below the unique parameter solving $1-e^{-\beta J}=\sqrt Q/(1+\sqrt Q)$ and positive above it. Its defining positive-set infimum is therefore that parameter, regardless of its value at the critical point. Solving gives $e^{-\beta_cJ}=1/(1+\sqrt Q)$ and $\beta_cJ=\log(1+\sqrt Q)$. [F4, step 1.2, algebra] ∎''')
s=section(s,'Remarks',r'''The pinned-boundary component count is $Q^{k_{\xi_n}(A)-1}$; its constant factor relative to the wired FK weight cancels on normalization. The order parameter is defined by finite-volume probabilities and its limit is established numerically, so this deduction does not use a choice-dependent infinite-volume measure extension. The coupling $J$ is the Potts indicator-interaction coupling displayed in the statement.''')
p.write_text(s)
id='ex-csm-frontier-ising-coupling-conversion';p,s=load(id)
s=s.replace('## Statement references','## Example references',1);p.write_text(s)
print('repaired four existing consumers; archived exact preimages')
