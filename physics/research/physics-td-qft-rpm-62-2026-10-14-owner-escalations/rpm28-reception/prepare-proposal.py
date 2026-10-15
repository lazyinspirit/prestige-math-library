from pathlib import Path
import json,difflib
p=Path(__file__).parent
obs=p/'observed'
new='post-rpm-ideal-rindler-phase-reception'
id='pthm-rpm-rindler-clock-gradient'
f=obs/'items'/f'{id}.md'
s=f.read_text()
s=s.replace('The frequency contraction ratio is a mathematical observer-frequency functional; interpreting it as reception by accelerated observers requires the additional hypothesis [A2], which the current plane-wave postulate explicitly excludes.', 'The instantaneous received-frequency ratio is conditional on the additional ideal local phase-reception postulate; its finite-apparatus use carries the short-observation and local ray-regime limits, without a numerical accuracy claim.')
s=s.replace('  - post-sr-ideal-plane-wave-model\n','  - post-sr-ideal-plane-wave-model\n  - '+new+'\n',1)
s=s.replace('  post-sr-ideal-plane-wave-model: physical-assumption\n','  post-sr-ideal-plane-wave-model: formulation-prerequisite\n  '+new+': physical-assumption\n',1)
s=s.replace('The contraction functional obeys $\\omega_R/\\omega_E=\\rho_E/\\rho_R$. Reading this as an accelerated-observer reception frequency requires the extra hypothesis [A2] below: clause (iv) of [[post-sr-ideal-plane-wave-model]] excludes accelerated-observer reception. The result is conditional and does not silently extend that postulate.', 'Under the additional adopted local reception rule [['+new+']], the instantaneous received angular frequencies at the two events obey $\\omega_R/\\omega_E=\\rho_E/\\rho_R$. The ratio is exact within that ideal model and inherits its local ray-regime and finite-apparatus qualifications, with no numerical error bound or empirical validation. Clause (iv) of [[post-sr-ideal-plane-wave-model]] retains its accelerated-reception exclusion; this theorem uses the separately adopted rule.')
s=s.replace('[A2] Additional physical reception assumption, not supplied by [F8]: the frequency functional $-k(U_n)$ is interpreted as the received frequency for these accelerated Rindler observers. The theorem\'s contraction identity below is mathematical; this added interpretation remains unresolved.', '[A2] [['+new+']]: an ideal comoving point receiver on the stationary Rindler congruence assigns the instantaneous angular frequency $-k(U_n)$ at reception. This is an additional adopted local phase-reading model; finite-apparatus use is limited to its local ray regime and short observation intervals, with no claimed numerical accuracy or empirical validation.')
s=s.replace('$U_n=(c/(a\\rho))\\partial_T$', '$U_n=(c^2/(a\\rho))\\partial_T$')
s=s.replace('$\\omega_n=-k(U_n)=-(c/(a\\rho))\\partial_T\\vartheta$', '$\\omega_n=-k(U_n)=-(c^2/(a\\rho))\\partial_T\\vartheta$')
s=s.replace('Calling this a received frequency additionally invokes [A2], which is not included in [F8].','Under [A2] these contractions are the instantaneous received angular frequencies; their finite-apparatus interpretation retains the local ray-regime and short-observation qualifications of that postulate. This is separate from [F8] and does not extend its scope.')
(proposed:=p/'proposal'/'items'/f'{id}.md').write_text(s)
id='ex-rpm-rindler-clock-gradient'; f=obs/'items'/f'{id}.md'; s=f.read_text()
s=s.replace('Two stationary clocks and one radial Rindler pulse','Two stationary clocks and one radial Rindler ray')
s=s.replace('interpreting the frequency functional as an accelerated-observer reception requires the theorem\'s unresolved additional assumption.', 'the instantaneous received-frequency reading is conditional on the theorem\'s additional adopted local phase-reception model, with its local ray-regime and finite-apparatus qualifications and no numerical accuracy or empirical validation claim.')
s=s.replace('The observer-frequency contraction functional ratio is $\\omega_R/\\omega_E=1/2$; its interpretation as an accelerated reception frequency is conditional on the unresolved additional hypothesis in the theorem.', 'The instantaneous received-frequency ratio is $\\omega_R/\\omega_E=1/2$ under the theorem\'s additional adopted local phase-reception rule, with its local ray-regime and short-observation qualifications for finite apparatus and no numerical error bound or empirical validation.')
s=s.replace('reception interpretation requires the theorem\'s [A2].','the instantaneous reception interpretation adopts the theorem\'s [A2] and retains all its qualifications.')
s=s.replace('The latter is a model functional calculation; by [F1] its physical reception reading remains conditional.', 'By [F1], the latter is the instantaneous received-frequency ratio within the additional adopted local phase-reception model, with its local ray-regime and finite-apparatus limits; no measured accuracy is asserted.')
(p/'proposal'/'items'/f'{id}.md').write_text(s)
# Exact observed manifest relocation proposal only; root reconciles final source mirrors after drain.
f=obs/'research'/'physics-td-qft-rpm-62-2026-10-14-batch-28.pages.json'
m=json.loads(f.read_text()); b=next(x for x in m if x['kind']=='B'); b['items'].extend(b.pop('examples',[]))
(p/'proposal'/'batch-28.inventory-relocation.pages.json').write_text(json.dumps(m,indent=2)+'\n')
patch=[]
for id in ['pthm-rpm-rindler-clock-gradient','ex-rpm-rindler-clock-gradient']:
 old=(obs/'items'/f'{id}.md').read_text(); newtext=(p/'proposal'/'items'/f'{id}.md').read_text()
 patch.extend(difflib.unified_diff(old.splitlines(True),newtext.splitlines(True),fromfile='a/items/'+id+'.md',tofile='b/items/'+id+'.md'))
(p/'proposal'/'rindler-source.patch').write_text(''.join(patch))
